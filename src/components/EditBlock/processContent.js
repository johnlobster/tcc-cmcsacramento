"use strict";
/*
  This function converts from iframe to oembed, otherwise ckeditor fails to parse it and drops the figure

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
  
  Don't need or want to add classes to oembed/iframe
  Makes more sense to use 'figure.media > iframe' as selector
  */
exports.__esModule = true;
var processContent = function (inputData) {
    if (inputData.length === 0) {
        return "";
    }
    else {
        var outputData = "";
        // process the input string serially
        var inputDataModified = inputData;
        while (inputDataModified.length > 0) {
            // const match = inputDataModified.match(/<iframe\s+type=.*src=.*\/embed\/([^?]+)[^<]*<\/iframe>/i)
            // const match = inputDataModified.match(/<iframe[^/]+\/\/www.youtube.com\/embed\/([^?]+)[^<]*<\/iframe>/i)
            var match = inputDataModified.match(/<iframe\s+type="text\/html"\s+src="https:\/\/www.youtube.com\/embed\/([^"]+)"\s*>[^<]*<\/iframe>/i);
            if (match) {
                // console.log(`processContent: found match for ${match[1]} full match ${match[0]}`)
                // console.log(`processContent: before = ${inputDataModified.substr(0, match.index)} `)
                // console.log(`processContent: after = ${inputDataModified.substr(match.index as number + match[0].length, (inputDataModified.length - match[0].length))}`)
                outputData = outputData +
                    inputDataModified.substr(0, match.index) +
                    ("<oembed url=\"https://youtu.be/" + match[1] + "\"></oembed>");
                inputDataModified = inputDataModified.substr(match.index + match[0].length, (inputDataModified.length - match[0].length));
            }
            else {
                // no match
                // console.log("processContent: no match")
                // console.log(`processContent: ${outputData}\n----------------------------------------`)
                outputData = outputData + inputDataModified;
                inputDataModified = ""; // clean exit to loop
            }
        }
        // console.log(`EditBlock.processContent: output data \n${outputData}`)
        return outputData;
    }
};
exports["default"] = processContent;
