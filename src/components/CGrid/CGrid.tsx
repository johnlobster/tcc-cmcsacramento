import React, { useEffect } from 'react';

/*
      A css grid component wrapper
      Maybe could fall back to flexbox if run in an old browser
    */

import theme from "../../global/theme"

import './CGrid.scss'


// type cgridOpption = boolean | undefined
// type gridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined
type gridSize = number | undefined
enum ScreenSize { xs, sm, md, lg, xl} 

interface MoreProps {
  container?: boolean;
  item?: boolean; // default is item 

  xs?: gridSize;                          // Grid responsive sizing default is 12
  sm?: gridSize;
  md?: gridSize;
  lg?: gridSize;
  xl?: gridSize;
}


const CGrid: React.FunctionComponent<MoreProps> = (props) => {

  const [itemWidth, updateItemWidth] = React.useState(0)
  const [itemWidthStyle, updateItemWidthStyle] = React.useState("md-jww-cgrid-itemSpan12")
  const [screenSize, updateScreenSize] = React.useState(ScreenSize.xs)

  useEffect(() => {
    let width = 12 // default, fill whole row
    if ( props.xs ) {
      width=props.xs
    }
    updateItemWidth(width)
  }, [])

  // component redraws when screen size changes, updating screenSize state
  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth
      if ( width < theme.breakpoints.values.sm) {
        updateScreenSize(ScreenSize.xs)
      } else if (width < theme.breakpoints.values.md) {
        updateScreenSize(ScreenSize.sm)
      } else if (width < theme.breakpoints.values.lg) {
        updateScreenSize(ScreenSize.md)
      } else  {
        updateScreenSize(ScreenSize.lg)
      }
      console.log(`CGrid: window resize to ${width} px`)
    }
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect( () => {
    console.log(`CGrid: update item class ScreenSize ${screenSize} props: xs ${props.xs} sm ${props.sm} md ${props.md} lg ${props.lg}`)
    if (screenSize === ScreenSize.xs) {
      if (props.xs) {
        if ((props.xs > 12) || (props.xs < 1)) {
          console.log("CGrid: xs parameter not 1 -12, use default of 12 ")
          updateItemWidthStyle("md-jww-cgrid-itemSpan12")
        } else if (props.xs === 6) {
          updateItemWidthStyle("md-jww-cgrid-itemSpan6")
        } else if (props.xs === 4) {
          updateItemWidthStyle("md-jww-cgrid-itemSpan4")
        } else {
          updateItemWidthStyle("md-jww-cgrid-itemSpan12")
        }
      } else {
        // undefined, maybe should be hidden
        updateItemWidthStyle("md-jww-cgrid-itemSpan12")
      }
    } else if (screenSize === ScreenSize.sm) {
      if (props.sm) {
        if ((props.sm > 12) || (props.sm < 1)) {
          console.log("CGrid: sm parameter not 1 -12, use default of 12 ")
          updateItemWidthStyle("md-jww-cgrid-itemSpan12")
        } else if (props.sm === 6) {
          updateItemWidthStyle("md-jww-cgrid-itemSpan6")
        } else if (props.sm === 4) {
          updateItemWidthStyle("md-jww-cgrid-itemSpan4")
        } else {
          updateItemWidthStyle("md-jww-cgrid-itemSpan12")
        }
      } else {
        // undefined, maybe should be hidden
        updateItemWidthStyle("md-jww-cgrid-itemSpan12")
      }
    } else if (screenSize === ScreenSize.md) {
      if (props.md) {
        if ((props.md > 12) || (props.md < 1)) {
          console.log("CGrid: md parameter not 1 -12, use default of 12 ")
          updateItemWidthStyle("md-jww-cgrid-itemSpan12")
        } else if (props.md === 6) {
          updateItemWidthStyle("md-jww-cgrid-itemSpan6")
        } else if (props.md === 4) {
          updateItemWidthStyle("md-jww-cgrid-itemSpan4")
        } else {
          updateItemWidthStyle("md-jww-cgrid-itemSpan12")
        }
      } else {
        // undefined, maybe should be hidden
        updateItemWidthStyle("md-jww-cgrid-itemSpan12")
      }
    } else if (screenSize === ScreenSize.lg) {
      if (props.lg) {
        if ((props.lg > 12) || (props.lg < 1)) {
          console.log("CGrid: lg parameter not 1 -12, use default of 12 ")
          updateItemWidthStyle("md-jww-cgrid-itemSpan12")
        } else if (props.lg === 6) {
          updateItemWidthStyle("md-jww-cgrid-itemSpan6")
        } else if (props.lg === 4) {
          updateItemWidthStyle("md-jww-cgrid-itemSpan4")
        } else {
          updateItemWidthStyle("md-jww-cgrid-itemSpan12")
        }
      } else {
        // undefined, maybe should be hidden, or inherit previous
        updateItemWidthStyle("md-jww-cgrid-itemSpan12")
      }
    }
  }, [screenSize, props.xs, props.sm, props.md, props.lg, props.xl])

  // const getWidthStyle: (width: number) => string = (width) => {
  //   if (itemWidth === 12) {
  //     return (styles.itemSpan12)
  //   } else if (itemWidth === 6) {
  //     return (styles.itemSpan6)
  //   } else if (itemWidth === 6) {
  //     return (styles.itemSpan4)
  //   } else {
  //     return (styles.itemSpan12)
  //   }
    
  // }

  return(
    <React.Fragment>
      {props.container ? (
        <div className="md-jww-cgrid-container">
          {props.children}
        </div>
      ): (
        <div className={itemWidthStyle}>
          {props.children}
        </div>
      )}
    </React.Fragment>
      
  
  );
}

export default CGrid;

{/* <div className={`${styles.itemSpan4}`}>
  {props.children}
</div> */}
    
// const CGrid: React.FunctionComponent<MoreProps> = (props) => {
//   return(
//     {props.container && (
//           <div className={styles.topBox}>
//           </div>
//         )}
//         {props.item && (
//           <div><props.children</div>
//     )}
//   );
// }