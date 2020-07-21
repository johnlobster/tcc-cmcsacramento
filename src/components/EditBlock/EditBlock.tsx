import React from 'react';
import {useLocation} from "react-router-dom";

import { makeStyles, createStyles } from '@material-ui/core/styles';

import getInitialContent from '../../database/dataLayer'
import theme, {rhythm} from "../../global/theme";

import processYT from './processYT'


/* eslint no-var: "off" */
declare var InlineEditor: any; // loaded from cdn as global

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
        [theme.breakpoints.up('xs')]: {
          width: '100%',
          padding: `${rhythm / 2}rem 0`,
        },
        [theme.breakpoints.up('md')]: {
          width: '75%',
          marginRight: 'auto',
          padding: `${rhythm / 2}rem 0`,
        },
        [theme.breakpoints.up('lg')]: {
          width: '50%',
          marginRight: 'auto',
          padding: `${rhythm}rem 0`,
        },
      },
      '& figure.media > iframe': {
        width: '100%',
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
  id: string;
  className?: string;
  content?: string;
} 

const EditBlock: React.FunctionComponent<MoreProps> = (props) => {

  const classes = myStyles()


  const routeLocation = useLocation()

  const editorInstance: any = React.useRef(null)


  // need to force update because setdangerouslyhtml doesn't force a redraw
  const [, updateRedraw] = React.useState(0);
  const forceUpdate = React.useCallback(() => updateRedraw(x => x + 1), []);

  const [content, updateContent] = React.useState("");
  const [editing, updateEditing] = React.useState(false);

  // log state changes
  React.useEffect(() => {
    console.log(`EditBlock: STATE CHANGE editing now ${editing} id ${props.id}`)
    forceUpdate()
  }, [editing, props.id, forceUpdate])
  React.useEffect(() => {
    console.log(`EditBlock: STATE CHANGE content  id ${props.id}`)
    // forceUpdate() // content state change doesn't force a redraw
  }, [content, props.id, forceUpdate])

  // on mount, load the correct content from database, if that doesn't exist, load from props.content
  const initialId = React.useRef(props.id)
  const initialContent = React.useRef(props.content)
  React.useEffect( () => {
    console.log(`EditBlock: mount and update content id ${props.id}`)
    updateContent(getInitialContent(routeLocation.pathname, initialId.current , initialContent.current))
  }, [routeLocation.pathname, props.id]) // added pathname because of rules of hooks, shouldn't change without component remount

  
  


  const exitCKEditor = (editingParameter: boolean): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      console.log(`EditBlock.exitCKEditor: begin ${props.id} editing ${editingParameter}`);
      if ( editingParameter) {
        // was editing so the content probably changed. Save to database and update state 'content'
        const outData: string = editorInstance.current.getData();
        const mediaOutData = processYT(outData) // if there was an embedded youtube added, then create the iframe
        console.log('EditBlock.exitCKEditor: media out data')
        console.log(mediaOutData)

        let localPage: string
        if (routeLocation.pathname === '/') {
          localPage = 'Home'
        } else {
          localPage = routeLocation.pathname.replace(/\//, "")
        }
        appDb.storeData(localPage, props.id, mediaOutData);
        console.log(`EditBlock.exitCKEditor: stored ${mediaOutData.length} bytes of data page ${localPage} id ${props.id} data type ${typeof (mediaOutData)}`)
        
        updateContent(mediaOutData);

        updateEditing(false);
      }

      // turn off focus tracking before destroying editor
      editorInstance.current.ui.focusTracker.stopListening('change:isFocused')
      editorInstance.current.destroy()
        .then(() => {
          console.log(`EditBlock: Editor destroyed instance ${props.id}, editor =`);
          editorInstance.current = null
          console.log(editorInstance.current)

          // setTimeout( () => {
          //   console.log(`EditBlock: ${props.id} editor after timeout, should be null `)
          //   console.log(editorInstance.current)
          // }, 2000)
          
        })
        .catch((error: any) => {
          console.error("Editor crashed during destruction");
          console.log(error);
        });
    }
  }

  // const onEditorFocusChange: (evt: any, data: any, isFocused: boolean) => void = (evt: any, data: any, isFocused: boolean) => {
  //   if (isFocused) {
  //     console.log(`EditBlock.onEditorFocusChange: ${props.id} Editor focused, set editing true`);
  //     updateEditing(true)
  //   } else {
  //     console.log(`EditBlock.onEditorFocusChange: ${props.id} Editor lost focus editing ${editing}`);
  //     exitCKEditor();

  //   }
  // };

  const handleMouseEnter = (event: React.MouseEvent): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      console.log(`EditBlock: Mouse enter ${props.id} editing ${editing}`)
      console.log(editorInstance.current)
      if (editorInstance.current) {
        // editor already exists in this EditBlock instance, don't create new one
        console.log(`EditorBlock.handleMouseEnter: Editor exists id ${props.id}`)
      } else {
        InlineEditor
          .create(document.querySelector(`#${props.id}`), {
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

          })
          .then((ed: any) => {
            editorInstance.current = ed;
            console.log(`EditBlock: Loaded editor ${props.id}`);
            console.log(editorInstance.current)

            // exit editor when focus lost by watching editor focusEvent
            editorInstance.current.ui.focusTracker.on('change:isFocused', (evt: any, data: any, isFocused: boolean, editing: boolean) => {
              console.log(`EditBlock.onEditorFocusChange: Enter function editing ${editing} ${props.id}`);
              if (isFocused) {
                console.log(`EditBlock.onEditorFocusChange: ${props.id} Editor focused, set editing true`);
                updateEditing(true)
              } else {
                console.log(`EditBlock.onEditorFocusChange: ${props.id} Editor lost focus editing ${editing}`);
                exitCKEditor(editing);

              }
            })
          })
      }
    }
  }

  const handleMouseLeave = (event: React.MouseEvent): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      console.log(`EditBlock.handleMouseLeave: ${props.id} editing ${editing}`)
      console.log(editorInstance.current)
      if (!editing && editorInstance.current) {
        // if didn't start editing, get rid of editor
        console.log(`EditBlock.handleMouseLeave: mouse leave destroy editor ${props.id}`)
        exitCKEditor(editing)
      } else {
        console.log(`EditBlock.handleMouseLeave: mouse leave didn't destroy editor ${props.id}`)
      }
    }
    
  }


  return(
    <React.Fragment>
      <div
        id={props.id}
        className={classes.root + " " + (editing ? classes.editorBlock : classes.noEditHover)}
        data-cmc="EditBlock"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        dangerouslySetInnerHTML={{ __html: content }}
      >
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