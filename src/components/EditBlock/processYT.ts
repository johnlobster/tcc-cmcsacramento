/*
  ckeditor outputs media as
  <figure class="media"> 
    <oembed url="https://youtu.be/a2MxuknropY"> 
    </oembed> 
  </figure>

  Expects to use an external package to identify this and optimize

  Much more complex than I need just for youtube, convert oembed to iframe

  <figure class="...">
    <iframe type="text/html" 
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
    >
    </iframe>
  </figure>
  
  */

  const processYT: (inputData: string) => string = (inputData) => {

    
    if ( inputData.length === 0) {
      return ""
    } else {
      let outputData = ""
      // process the input string serially
      let inputDataModified = inputData
      while (inputDataModified.length > 0) {
        // console.log(`processYT: in loop inputDataModified = ${inputDataModified}`)
        const match = inputDataModified.match(/(<oembed\s+url=)"([^"]+)"\s*>[^<]*<\/oembed>/i)
        if (match) {
          // console.log(`processYT: found match ${match[0]}`)
          // console.log(`processYT: before = ${inputDataModified.substr(0, match.index)} `)
          // console.log(`processTY: after = ${inputDataModified.substr(match.index + match[0].length, (inputDataModified.length - match[0].length))}`)
          // extract url from <oembed>
          const idArray = match[2].match(/\/([^/]+)$/)
          if (idArray) {
            // console.log(`Youtube id ${idArray[0]} length ${idArray.length}`)
            // console.log(`??? ${idArray[1]}`)
          } else {
            // console.log(`processYT: couldn't find youtube id match = ${match}`)
            return inputData
          }

          outputData = outputData +
            inputDataModified.substr(0, match.index) +
            "<iframe type=\"text/html\" src=" +
            `"https://www.youtube.com/embed/${idArray[1]}"></iframe>`;
          
          inputDataModified = inputDataModified.substr(match.index as number + match[0].length, (inputDataModified.length - match[0].length))
        } else {
          // no match
          // console.log("processYT: no match")
          // console.log(`processYT: ${outputData}\n----------------------------------------`)

          outputData = outputData + inputDataModified
          inputDataModified = ""
        }
      }
      return outputData
    }
  }

  export default processYT
