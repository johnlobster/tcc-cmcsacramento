import React from 'react';
import {useLocation} from "react-router-dom";

import { makeStyles, createStyles } from '@material-ui/core/styles';

import getInitialContent from '../../database/dataLayer'


/* eslint no-var: "off" */
declare var InlineEditor: any; // loaded from cdn as global

const myStyles = makeStyles(() =>
  createStyles({
    editorBlock: {
      outlineWidth: '2px',
      outlineColor: 'grey',
      outlineStyle: 'dashed',
    },
    noEditHover: {
      outlineStyle: 'none',
      outlineColor: 'transparent',
      outlineWidth: '4px',
      outlineOffset: '3px',
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

  let editorInstance: any = null;
  const [content, updateContent] = React.useState(getInitialContent(routeLocation.pathname, props.id, props.content));
  const [editing, updateEditing] = React.useState(false);

  
  // React.useEffect(() => {
  //   console.log(`State changed editing ${editing} content ${content}`)
  // }, [content, editing])

  const exitCKEditor = (): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      console.log(`EditBlock: begin exitCKEditor ${props.id}`);
      const outData: string = editorInstance.getData();
      
      updateContent(outData);
      let localPage: string
      if (routeLocation.pathname === '/') {
        localPage = 'Home'
      } else {
        localPage = routeLocation.pathname.replace(/\//, "")
      }
      appDb.storeData(localPage, props.id, outData);
      console.log(`
      EditBlock: stored ${outData.length} bytes of data page ${localPage} id ${props.id} data type ${typeof(outData)}
      `)
      
      updateEditing(false);
      

      editorInstance.destroy()
        .then(() => {
          console.log(`EditBlock: Editor destroyed, show editor instance ${props.id}`);
          console.log(editorInstance)
          editorInstance = null
          setTimeout( () => {
            console.log(`EditBlock: editorInstance after timeout, should be null ${props.id}`)
            console.log(editorInstance)
          }, 2000)
          
        })
        .catch((error: any) => {
          console.error("Editor crashed during destruction");
          console.log(error);
        });
    }
  }

  const handleMouseEnter = (event: React.MouseEvent): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      console.log(`EditBlock: Mouse enter ${props.id}`)
      console.log(editorInstance)
      if (editorInstance) {
        // editor already exists in this EditBlock instance, don't create new one
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
              removeProviders: ['instagram', 'twitter', 'googleMaps', 'flickr', 'facebook']
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
            editorInstance = ed;
            console.log(`EditBlock: Loaded editor ${props.id}`);
            console.log(editorInstance)
            // console.log(`EditBlock context.editorInstanceId ${editContext.editorInstanceId} id = ${props.id}`)
            // editContext.updateEditor(props.id)

            // exit editor when focus lost by watching editor focusEvent
            editorInstance.ui.focusTracker.on('change:isFocused', (evt: any, data: any, isFocused: boolean) => {
              if (isFocused) {
                console.log(`EditBlock: ${props.id} Editor focused, set editing state`);
                updateEditing(true)
              } else {
                console.log(`EditBlock: ${props.id} Editor lost focus`);
                exitCKEditor();

              }
            });
          })
      }
    }
  }

  const handleMouseLeave = (event: React.MouseEvent): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      console.log(`EditBlock: Mouse leave ${props.id} editing ${editing}`)
      console.log(editorInstance)
      if (!editing && editorInstance) {
        // if didn't start editing, get rid of editor
        exitCKEditor()
      } else {
        console.log(`EditBlock: mouse leave didn't destroy editor {props.id}`)
      }
    }
    
  }


  return(
    <React.Fragment>
      <div
        id={props.id}
        className={editing ? classes.editorBlock : classes.noEditHover}
        style={{ padding: 0 }}
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