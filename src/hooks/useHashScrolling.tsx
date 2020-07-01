import React from 'react';
import { useLocation } from 'react-router-dom';

// hook (my first) to scroll to location given by hash
// after routing to a new page, this hook checks to see if there was a hash as part of the url
// if so, and id=hash exists, scroll there, otherwise scroll to top of page

const useHashScrolling = (): void => {
  const { hash } = useLocation()
  React.useEffect(() => {
    // run on mount, check for navigation to hash, otherwise scroll to top
    // console.log("About: hash received " + hash + " length " + hash.length)
    if (hash && hash.length > 0) {
      const match: RegExpMatchArray | null = hash.match(/^#(.+)$/)
      if (match) {
        const bareHash = match[1]
        // check location exists
        const targetElement = document.getElementById(bareHash)
        if (targetElement) {
          targetElement.scrollIntoView()
          // console.log(`About: scrolled to id ${bareHash}`)
          return
        } else {
          // console.log(`About: could not scroll to bareHash ${bareHash}`)

        }
      } else {
        // console.log(`About: hash didn't match pattern #(target)`)
      }
    } else {
      // console.log(`About: hash didn't exist or was empty`)
    }
    // scroll to top, would be better to remember last location on this page
    // console.log("About: scroll to top of page")
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
}
export default useHashScrolling