"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
// hook (my first) to scroll to location given by hash
// after routing to a new page, this hook checks to see if there was a hash as part of the url
// if so, and id=hash exists, scroll there, otherwise scroll to top of page
var useHashScrolling = function (refsList) {
    var hash = react_router_dom_1.useLocation().hash;
    react_1["default"].useEffect(function () {
        // run on mount, check for navigation to hash, otherwise scroll to top
        console.log("useHashScrolling: hash received " + hash + " length " + hash.length);
        if (hash && hash.length > 0) {
            var match = hash.match(/^#(.+)$/); // remove leading '#'
            if (match) {
                var bareHash = match[1];
                // check location exists
                var targetElement = document.getElementById(bareHash);
                if (targetElement) {
                    console.log("useHashScrolling: targetElement " + targetElement);
                    // It exists, is it a React element in the list of refs passed in ?
                    targetElement.scrollIntoView();
                    // console.log(`About: scrolled to id ${bareHash}`)
                    return;
                }
                else {
                    console.log("useHashScrolling: could not scroll to bareHash " + bareHash);
                }
            }
            else {
                // console.log(`About: hash didn't match pattern #(target)`)
            }
        }
        else {
            // console.log(`About: hash didn't exist or was empty`)
        }
        // scroll to top, would be better to remember last location on this page
        // console.log("About: scroll to top of page")
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
};
exports["default"] = useHashScrolling;
