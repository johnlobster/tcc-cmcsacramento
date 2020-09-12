import React from 'react';
import {useLocation} from "react-router-dom";

import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline'
// import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import getInitialContent from '../../database/dataLayer'
import theme, {rhythm} from "../../global/theme";

// ToDo combine into single module
import processYT from './processYT'
import processContent from './processContent'

/* eslint no-var: "off" */
// declare var InlineEditor: any; // loaded from cdn as global

const myStyles = makeStyles(() =>
  createStyles({
    root: {
      
    },
    editorBlock: {
      outlineWidth: '2px',
      outlineColor: 'grey',
      outlineStyle: 'dashed',
      padding: 0,
    },
    noEditHover: {
      outlineStyle: 'none',
      outlineColor: 'transparent',
      outlineWidth: '4px',
      outlineOffset: '3px',
      // styling embedded media item (YouTube)
      '& figure.media': {
        minWidth: '480px',  // Google recommendation
        maxWidth: '800px',
        // height: 'auto',
        margin: 0,
        [theme.breakpoints.up('xs')]: {
          width: '100%',
          padding: `${rhythm / 2}rem 0`,
        },
        [theme.breakpoints.up('sm')]: {
          width: '75%',
          marginRight: 'auto',
          padding: `${rhythm / 2}rem 0`,
        },
        
      },
      '& figure.media > iframe': {
        minWidth: '480px',  // Google recommendation
        maxWidth: '800px',
        minHeight: '270px',
        maxHeight: '450px',
        width: '50vw',
        height: 'auto',
        boxShadow: theme.shadows[7],
        borderStyle: 'none',
      },
      '&:hover': {
        outlineStyle: 'solid',
        outlineColor: 'rgba(77, 96, 228, 0.75)',
        borderStyle: 'none',
        padding: '0',
      },
      // This is overriding ckeditor adding margin at the bottom, more specific selector
      '&[data-cmc="EditBlock"]:hover > :last-child': {
        marginBottom: '1.5rem',
      },
      // This is overriding ckeditor adding margin at the top, more specific selector
      '&[data-cmc="EditBlock"]:hover > :first-child': {
        marginTop: '0',
      },
      
    },
  },
  )
)

interface MoreProps {
  id: string;             // tag to make the content unique
  className?: string;     // standard react classes. Mutable
  content?: string;       // content to be used if location.path/id not found in database
  page?: string;          // page, overrides location.path
} 

const EditBlock: React.FunctionComponent<MoreProps> = (props) => {

  const classes = myStyles()


  const {pathname} = useLocation()
  const initialPathname = React.useRef(pathname)
  const initialId = React.useRef(props.id)
  
  const [content, updateContent] = React.useState("");
  const initialContent = React.useRef(props.content)

  const [editing, updateEditing] = React.useState(false);
  const [editorLoaded, updateEditorLoaded] = React.useState(false)

  // log state changes
  React.useEffect(() => {
    console.log(`EditBlock: STATE CHANGE editing  ${editing} editorLoaded ${editorLoaded} id ${props.id}`)
  }, [editing, editorLoaded, props.id])
  React.useEffect(() => {
    console.log(`EditBlock: STATE CHANGE content  id ${props.id}`)
    console.log(content)
  }, [content, props.id])


  // on mount, load the correct content from database, if that doesn't exist, load from props.content
  // if page prop specified, use that instead of initialPathname
  React.useEffect( () => {
    console.log(`EditBlock: mount and update content id ${initialId.current}`)
    if ( props.page) {
      updateContent(
        getInitialContent(props.page, initialId.current, initialContent.current)
      )
    } else {
      updateContent(
        getInitialContent(initialPathname.current, initialId.current, initialContent.current)
      )
    }
    
    
  }, []) 

  const inlineEditorOptions = {
    initialData: content,
    // ToDo add images and media
    removePlugins: [
      'CKFinder',
      'PasteFromOffice', 'Table', 'TableToolbar'
    ],
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      'blockQuote',
      '|',
      'mediaEmbed',
      '|',
      'undo',
      'redo'
    ],
    mediaEmbed: {
      // don't allow media without preview as it would be harder to integrate into document
      // following can be used - dailymotion, spotify, youtube, vimeo
      // ToDo only support youtube at the moment
      removeProviders: [
        'dailymotion',
        'spotify',
        'vimeo',
        'instagram', 'twitter', 'googleMaps', 'flickr', 'facebook'
      ]
    },
    // ToDo install plugins for image - will want ImageLink
    // image: {
    //   // styling toolbar for image
    //   toolbar: [
    //     'imageStyle:alignLeft', 
    //     'imageStyle:full', 
    //     'imageStyle:alignRight',
    //     '|',
    //     'imageTextAlternative'
    //   ],
    //   styles: [
    //     // This option is equal to a situation where no style is applied.
    //     'full',

    //     // This represents an image aligned to the left.
    //     'alignLeft',

    //     // This represents an image aligned to the right.
    //     'alignRight'
    //   ]
    // },

  }

  const handleMouseEnter = (event: React.MouseEvent): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {

      console.log(`EditBlock.handleMouseEnter: ${props.id} editing ${editing} editorLoaded ${editorLoaded}`)

      if (!editing) {
        updateEditorLoaded(true)
      }
  }
  }

  const handleClick = (event: React.MouseEvent): void => {
    // propagates to ckeditor
    console.log(`EditBlock.handleClick editing=${editing} id=${props.id} editorLoaded ${editorLoaded}`)
    updateEditing(true) // instead of handling, could we use cke focus event ?
  }

  const handleMouseLeave = (event: React.MouseEvent): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      console.log(`EditBlock.handleMouseLeave: ${props.id} editing ${editing}  editorLoaded ${editorLoaded}`)
      if (!editing && editorLoaded) {
        // if didn't start editing, get rid of editor
        console.log(`EditBlock.handleMouseLeave: mouse leave destroy editor ${props.id}`)
        // React destroys editor based on editorLoaded state
        // should perhaps remove focus event listener, but need a reference to the editor
        updateEditorLoaded(false)
      } else {
        console.log(`EditBlock.handleMouseLeave: mouse leave didn't destroy editor ${props.id}`)
      }
    }
    
  }

  const editorBlur = (event, editor): void => {
    console.log(`EditBlock.editorBlur:  editing ${editing}  editorLoaded ${editorLoaded}`);

    const outData: string = editor.getData();
    const mediaOutData = processYT(outData) // if there was an embedded youtube added, then create the iframe
    console.log(`EditBlock.editorBlur: data from processYT\n${mediaOutData}`);

    let localPage: string
    if (pathname === '/') {
      localPage = 'Home'
    } else {
      localPage = pathname.replace(/\//, "")
    }
    appDb.storeData(localPage, props.id, mediaOutData);
    console.log(`EditBlock.exitCKEditor: stored ${mediaOutData.length} bytes of data page ${localPage} id ${props.id} data type ${typeof (mediaOutData)}`)

    // remove focus event watcher
    editor.ui.focusTracker.stopListening('change:isFocused')
    updateContent(mediaOutData)

    // wait for content state to propagate before changing editorLoaded
    // don't need to destroy editor, because React will, based on editorLoaded state

    setTimeout( () => {
      console.log(`EditBlock.editorBlur: timeout ${initialId.current}`)
      updateEditorLoaded(false)
      updateEditing(false);
    }, 500)
        
  }

  const editorInit = (editor): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {

      console.log(`EditorBlock.editorInit: enter editing ${editing}  editorLoaded ${editorLoaded}`)
      console.log(editor)
      // CKEditorInspector.attach(editor); // debug
      // exit editor when focus lost by watching editor focusEvent
      editor.ui.focusTracker.on('change:isFocused', (evt: any, data: any, isFocused: boolean, oldValue: boolean) => {
        console.log(`EditBlock.CKEditor.onEditorFocusChange: Focus changed editing ${editing} ${initialId.current}`);
        if (isFocused) {
          console.log(`EditBlock.CKEditor.onEditorFocusChange: ${initialId.current} Editor focused editing ${editing} editorLoaded ${editorLoaded}`);
          updateEditing(true)
        } else {
          console.log(`EditBlock.CKEditor.onEditorFocusChange: ${initialId.current} Editor lost focus editing ${editing} editorLoaded ${editorLoaded}
          Calling editorBlur (is state bound correctly ?)`);
          editorBlur(evt,editor) // would inline
        }
      })
      // For some reason, when the editor is created by React, the data is not set correctly. Set the data again
      const contentData: string = processContent(content)
      // console.log(`EditorBlock.editorInit: processContent(content) ${contentData}`)
      editor.setData(contentData)
  }
  } 

  return (
    <React.Fragment>
      <div
        id={props.id}
        className={classes.root + " " + (editing ? classes.editorBlock : classes.noEditHover)}
        data-cmc="EditBlock"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {editorLoaded ? (
          <CKEditor 
            editor= {InlineEditor}
            data= {processContent(content)}
            config={inlineEditorOptions}
            onInit={(editor) => {
              console.log('EditBlock: component init callback', editor);
              editorInit(editor)
            }}
            onFocus={(event, editor) => {
              console.log('EditBlock: Focus.', editor);
            }}
            onClick={(event, editor) => {
              console.log('EditBlock: Click', editor);
            }}
          />
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: content }}
          >
          </div>
        )
        }   
      </div>
    </React.Fragment>

  );
}

export default EditBlock;

// ckeditor inline adds padding/margin/border
// 1. left/right - fixed by explicit style on the div
// 2. 1st element extra padding using >:first-child
// 3. last element reduced margin
// easiest solution - go back to create editor on click, but can't create a synthetic event to get cursor right
//       style={{padding: 0}}

/*
  Mouse enter: create editor unless exists
  Focus(listen to editor focus) set editing
  Blur(listen to editor focus) set editing false, destroy editor
  Mouse leave: destroy editor unless editing
*/