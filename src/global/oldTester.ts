import { createMuiTheme, Theme } from '@material-ui/core/styles';

import theme from "./theme";

import makeGlobalsFromTheme from "./makeGlobalsFromTheme";

// run with 'npx ts-node <file>'
// ts-node gets confused with modules. Modified tsconfig.json to use jscommon

console.log("This is the test wrapper");

const t1: Theme = createMuiTheme();

const t2 = makeGlobalsFromTheme(t1, ['h1','h2','h3','h4','h5'])

// console.log(t2)

// console.log(t1);

console.log(theme);