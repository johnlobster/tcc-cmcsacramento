// import React from "react"

// utility to pass className down
export const passClasses: (propsClassName: string | undefined) => string = (propsClassName: string | undefined) => {
  if (propsClassName) {
    return propsClassName
  } else {
    return "";

  }
}