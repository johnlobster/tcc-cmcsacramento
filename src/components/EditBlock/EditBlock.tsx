import React from 'react';
import {useLocation} from "react-router-dom";

import { makeStyles, createStyles } from '@material-ui/core/styles';

import getInitialContent from '../../database/dataLayer'

/* eslint no-var: "off" */
declare var InlineEditor: any; // loaded from cdn as global

const myStyles = makeStyles(() =>
  createStyles({
    editorBlock: {
      outlineStyle: 'none',
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
      appDb.storeData(routeLocation.pathname, props.id, outData);
      console.log(`EditBlock: stored ${outData.length} bytes of data page ${routeLocation.pathname} id ${props.id}`)
      
      updateEditing(false);
      

      editorInstance.destroy()
        .then(() => {
          console.log(`EditBlock: Editor destroyed ${props.id}`);
          console.log(editorInstance)
          editorInstance = null
          setTimeout( () => {
            console.log(`EditBlock: editorInstance after timeout ${props.id}`)
            console.log(editorInstance)
          }, 2000)
          // updateContent(fixedOutData);
          // updateEditing(false);
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
        // editor already exists, don't create new one
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
              '|',
              'blockQuote',
              'undo',
              'redo'
            ]

          })
          .then((ed: any) => {
            editorInstance = ed;
            console.log(`EditBlock: Loaded editor ${props.id}`);
            console.log(editorInstance)
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