"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/core/styles");
// this function uses the information from typography.<tag> to set the same values on the default tags
// so that <Typography></Typography> doesn't have to be used all over the place
// MuiCssBaseline is used to contain all in one place. '@global' could be used on any injected style sheet
// tagsList is a list of tags that will have their styles set
// typography only supports some tags (Variant type)
// checks to see if typography tag exists before adding to theme
var makeGlobalsFromTheme = function (inputTheme, tagsList) {
    var allTags = {};
    for (var i in tagsList) {
        // check if exists
        if (inputTheme.typography[tagsList[i]]) {
            allTags[tagsList[i]] = inputTheme.typography[tagsList[i]];
        }
    }
    var outputTheme = styles_1.createMuiTheme(inputTheme, {
        overrides: {
            MuiCssBaseline: {
                '@global': allTags
            }
        }
    });
    return outputTheme;
};
exports["default"] = makeGlobalsFromTheme;
