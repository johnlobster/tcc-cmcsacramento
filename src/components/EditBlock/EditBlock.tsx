import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

// import { passClasses} from "../../global/common"

/* eslint no-var: "off" */
declare var InlineEditor: any; // loaded from cdn as global

const myStyles = makeStyles(() =>
  createStyles({
    editorBlock: {
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
      },
      '&:hover > :first-child': {
        marginTop: '1rem',
      },
      // ToDo - "Edit block" caption.
      // No parent to be able to set position:relative on
      // Transform increases size of block
      // '& > div:hover:before': {
      //   content: '"Edit block"',
      //   color: 'rgba(77, 96, 228, 0.9)',
      //   fontSize: '1.5rem',
      //   position: 'absolute',
      //   left: '-2em',
      //   top: '-1.5em',
      // },
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

  // const isFrame = true;  // temporary, pass down as context

  // const passedClasses: string = passClasses(props.className);

  const getInitialContent: () => string = () => {
    if (props.content) {
      return props.content;
    } else {
      return ""
    }
  }

  // look at click events
  // React.useEffect( () => {
  //   const log: React.MouseEventHandler = (event: React.MouseEvent) => {
  //     console.log(`Click event x=${event.clientX} y=${event.clientY}`)
  //   }
  //   document.addEventListener('click', log)
  //   return document.removeEventListener('click', log)
  // })

  let editorInstance: any = null;
  const [content, updateContent] = React.useState(getInitialContent);
  const [editing, updateEditing] = React.useState(false);

  
  // React.useEffect(() => {
  //   console.log(`State changed editing ${editing} content ${content}`)
  // }, [content, editing])
  const exitCKEditor = (): void => {
    if (process.env.REACT_APP_BUILD_MODE === "author") {
      console.log(`EditBlock: begin exitCKEditor ${props.id}`);
      const outData: string = editorInstance.getData();
      
      updateContent(outData);
      // appDb.storeData("page1", props.id, outData);
      
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

  const handleMouseLeave = (event: React.MouseEvent): void => {
    console.log(`EditBlock: Mouse leave ${props.id} editing ${editing}`)
    console.log(editorInstance)
    if (!editing && editorInstance) {
      // if didn't start editing, get rid of editor
      exitCKEditor()
    } else {
      console.log(`EditBlock: mouse leave didn't destroy editor {props.id}`)
    }
  }

  // straight inline version
  // const handleClick = (event: React.MouseEvent): void => {
  //   if (process.env.REACT_APP_BUILD_MODE === "author") {
  //     const xCoordinate = event.clientX
  //     const yCoordinate = event.clientY
  //     // const eventTarget = event.target

  //     console.log(`EditBlock.handleClick`)
  //     // console.log(`Click event x=${event.clientX} y=${event.clientY}`);
  //     console.log("BlockEdit: enter handleClick")
  //     event.persist()
  //     console.log(event)
  //     console.log(event.nativeEvent)
  //     if (!editing) {
  //       // event.stopPropagation()
  //       const ckElement = document.querySelector(`#${props.id}`)
  //       // console.log(event);
  //       InlineEditor
  //         .create(ckElement, {
  //           // ToDo add images and media
  //           removePlugins: [
  //             'CKFinder',
  //             'PasteFromOffice', 'Table', 'TableToolbar'
  //           ],
  //           toolbar: [
  //             'heading',
  //             '|',
  //             'bold',
  //             'italic',
  //             'link',
  //             'bulletedList',
  //             'numberedList',
  //             '|',
  //             'indent',
  //             'outdent',
  //             '|',
  //             'blockQuote',
  //             'undo',
  //             'redo'
  //           ]

  //         })
  //         .then((ed: any) => {
  //           editorInstance = ed;
  //           console.log("EditBlock: Loaded editor");
  //           // exit editor when focus lost by watching editor focusEvent
  //           editorInstance.ui.focusTracker.on('change:isFocused', (evt: any, data: any, isFocused: boolean) => {
  //             if (isFocused) {
  //               console.log(`Editor focused`);
  //             } else {
  //               console.log(`Editor lost focus`);
  //               exitCKEditor();

  //             }
  //           });

  //           // focus on content so that don't need two clicks
  //           // editorInstance.editing.view.focus();

  //           // create synthetic mouse click at the same place so don't need two clicks
  //           // const newEvent 
            
  //           /*
  //             initMouseEvent arguments
  //               canBubbleArg: boolean, 
  //               cancelableArg: boolean, 
  //               viewArg: Window, 
  //               detailArg: number, 
  //               screenXArg: number, 
  //               screenYArg: number, 
  //               clientXArg: number, 
  //               clientYArg: number, 
  //               ctrlKeyArg: boolean, 
  //               altKeyArg: boolean, 
  //               shiftKeyArg: boolean, 
  //               metaKeyArg: boolean, 
  //               buttonArg: number, 
  //               relatedTargetArg: EventTarget | null
  //           */
  //           const newEvent = new MouseEvent(
  //             'click', {
  //             bubbles: false,
  //             cancelable: false,
  //             view: window,
  //             clientX: xCoordinate,
  //             clientY: yCoordinate
  //           })
            
  //           const newReactEvent: React.MouseEvent<Element, MouseEvent> = new React.MouseEvent< Element, MouseEvent> (
              
              
  //             // false,
  //             // true,
  //             // window.self,
  //             // 1,
  //             // xCoordinate,
  //             // yCoordinate,
  //             // xCoordinate,
  //             // yCoordinate,
  //             // false,
  //             // false,
  //             // false,
  //             // false,
  //             // 0,
  //             // ckElement
  //           )
  //           if (ckElement) {
  //             const cancelled = ckElement.dispatchEvent(newEvent)
  //             if (cancelled) {
  //               // A handler called preventDefault
  //               console.log("BlockEdit: synthetic event cancelled");
  //             } else {
  //               // None of the handlers called preventDefault
  //               console.log("BlockEdit: synthetic event not cancelled");
  //             }
  //           }
  //           console.log(newEvent)
  //           updateEditing(true);

  //           console.log("EditBlock: leaving handleClick")
  //           // normal exit point for handleClick
  //         })
  //         .catch((err: any) => {
  //           console.error("Editor crashed");
  //           console.log(err);
  //         });
  //     } else {
  //       console.log("Bad if statement, should not have reached. Click should not have been caught if editing")
  //     }
  //   }
  // }

  return(
    <div 
      id={props.id}
      className={editing ? classes.editorBlock : classes.noEditHover}
      style={{padding: 0}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      dangerouslySetInnerHTML={{__html: content}}
    >
    </div>
  );
}

export default EditBlock;

// ckeditor inline adds padding/margin/border
// 1. left/right - fixed by explicit style on the div
// 2. 1st element extra padding using >:first-child
// 3. last element reduced margin
// easiest solution - go back to create editor on click, but can't create a synthetic event to get cursor right
/*
  Mouse enter: create editor unless exists
  Focus(listen to editor focus) set editing
  Blur(listen to editor focus) set editing false, destroy editor
  Mouse leave: destroy editor unless editing
*/