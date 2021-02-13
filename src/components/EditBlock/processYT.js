"use strict";
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
  
  Note - the iframe src could be "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  This would start playing on load, and check that the origin was http://example.com
  Neither option is useful to me
  
  */
exports.__esModule = true;
// ToDo - combine both functions into a single module
var processYT = function (inputData) {
    if (inputData.length === 0) {
        return "";
    }
    else {
        console.log("EditBlock.processYT: Input data\n" + inputData);
        var outputData = "";
        // process the input string serially
        var inputDataModified = inputData;
        while (inputDataModified.length > 0) {
            // console.log(`processYT: in loop inputDataModified = ${inputDataModified}`)
            var match = inputDataModified.match(/(<oembed\s+url=)"([^"]+)"\s*>[^<]*<\/oembed>/i);
            if (match) {
                // console.log(`processYT: found match ${match[0]}`)
                // console.log(`processYT: before = ${inputDataModified.substr(0, match.index)} `)
                // console.log(`processTY: after = ${inputDataModified.substr(match.index + match[0].length, (inputDataModified.length - match[0].length))}`)
                // extract url from <oembed>
                var idArray = match[2].match(/\/([^/]+)$/);
                if (idArray) {
                    // console.log(`Youtube id ${idArray[0]} length ${idArray.length}`)
                    // console.log(`??? ${idArray[1]}`)
                }
                else {
                    // console.log(`processYT: couldn't find youtube id match = ${match}`)
                    return inputData;
                }
                outputData = outputData +
                    inputDataModified.substr(0, match.index) +
                    "<iframe type=\"text/html\" src=" +
                    ("\"https://www.youtube.com/embed/" + idArray[1] + "\"></iframe>");
                inputDataModified = inputDataModified.substr(match.index + match[0].length, (inputDataModified.length - match[0].length));
            }
            else {
                // no match
                // console.log("processYT: no match")
                // console.log(`processYT: ${outputData}\n----------------------------------------`)
                outputData = outputData + inputDataModified;
                inputDataModified = "";
            }
        }
        return outputData;
    }
};
exports["default"] = processYT;
