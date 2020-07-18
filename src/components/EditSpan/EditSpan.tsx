import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';


/* eslint no-var: "off" */
declare var InlineEditor: any; // loaded from cdn as global

const myStyles = makeStyles(() =>
  createStyles({
    editorSpan: {
      outlineStyle: 'solid',
      outlineColor: 'transparent',
      outlineWidth: '4px',
      outlineOffset: '3px',
      display: 'inline',

      '& p': {
        display: 'inline',
      },
      
    },
    noEditHover: {
      outlineStyle: 'solid',
      outlineColor: 'transparent',
      outlineWidth: '4px',
      outlineOffset: '3px',
      display: 'inline',
      position: 'relative',
      '& p,div': {
        display: 'inline',
        lineHeight: 'inherit',
        marginBottom: 0,

      },
      '&:hover': {
        outlineColor: 'rgba(77, 96, 228, 0.75)',
      },
      '& p:hover:before': {
        content: '"Edit line"',
        color: 'rgba(77, 96, 228, 0.9)',
        fontSize: '1.5rem',
        position: 'absolute',
        left: '-2em',
        top: '-1.5em',
      }
    },
  },
  )
)

interface MoreProps { 
  id: string; 
  className?: string; } 

const EditSpan: React.FunctionComponent<MoreProps> = (props) => {

  const classes = myStyles()

  // const isFrame = true;  // temporary, pass down as context

  // const passedClasses: string = passClasses(props.className);
  
  // default content could be props.children for empty content (never edited) might need to be set in useState
  let editorInstance: any = null;
  const [content, updateContent] = React.useState(props.children);
  const [editing, updateEditing] = React.useState(false);

  const exitCKEditor = (): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      console.log("Focus lost, so destroy editor");
      const outData: string = editorInstance.getData();
      console.log(`Output string: >>${outData}<<`);
      // strip out <p> at this point
      const removeP = /^\s*<p>(.*)<\/p>$/;
      const match: string[] | null = outData.match(removeP);
      let fixedOutData = ""
      if (match) {
        fixedOutData = match[1];
      } else {
        fixedOutData = outData
      }
      console.log(`Modified output string: ${fixedOutData}`);
      updateContent(fixedOutData);
      // appDb.storeData("page1", props.id, outData);
      setTimeout( () => { 
        console.log(`A little later, data = ${fixedOutData} content=${content}`)
        updateEditing(false);

        

      }, 2000)

      editorInstance.destroy()
        .then(() => {
          console.log("Editor destroyed");
          // updateContent(fixedOutData);
          // updateEditing(false);
        })
        .catch((error: any) => {
          console.error("Editor crashed during destruction");
          console.log(error);
        });
  }}

  // straight inline version
  const handleClick = (event: React.MouseEvent): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      event.stopPropagation()
      if (!editing) {
        console.log(`Click event x=${event.clientX} y=${event.clientY}`);
        // console.log(event);
        InlineEditor
          .create(document.querySelector(`#${props.id}`), {
            removePlugins: [
              'Heading', 'BlockQuote', 'CKFinder', 'EasyImage', 'ImageCaption',
              'ImageStyle', 'ImageToolbar', 'ImageUpload', 'Indent', 'List',
              'MediaEmbed', 'PasteFromOffice', 'Table', 'TableToolbar'
            ],
            toolbar:[
              
              'bold',
              'italic',
              'link',
              'undo',
              'redo'
            ]
          
          })
          .then((ed: any) => {
            editorInstance = ed;
            console.log("Loaded editor, CKEspan");
            // define focus and lost focus events
            editorInstance.ui.focusTracker.on('change:isFocused', (evt: any, data: any, isFocused: boolean) => {
              console.log(`Editor focused: ${isFocused}. `);
              // console.log(evt);
              // console.log(data);
              // console.log("----------");
            });
            // exit editor when focus lost
            editorInstance.ui.focusTracker.on('change:isFocused', (evt: any, data: any, isFocused: boolean) => {
              if (!isFocused) {
                exitCKEditor();
              }
            });
            // focus on content so that don't need two clicks
            editorInstance.editing.view.focus();
            // Disable return key - good for span editing, not so good for block editing
            // editorInstance.keystrokes.set('enter', ''); // didn't work ....
            // console.log(editorInstance);
            updateEditing(true);
          })
          .catch((err: any) => {
            console.error("Editor crashed");
            console.log(err);
          });
      } else {
        console.log("Bad if statement, should not have reached. Click should not have been caught if editing")
      }
    }
  }
  

  return(
      <div
        id={props.id}
        className={editing ? classes.editorSpan : classes.noEditHover}
        onClick={editing ? undefined :  handleClick }
        
      >
        <p>{content}</p>
        
      </div>

  );
}

export default EditSpan;