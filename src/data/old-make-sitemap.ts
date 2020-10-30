import fs from 'fs'

// import {allPages} from './page-info'

// This is a dev script that runs some time during build
// Generates /public/sitemap.xml using data in page-info

/*
  DOESN'T WORK :(
    The project is set up using create-react-app, which automatically builds image references, scss files etc
    into the bundle using webpack
    page-info references each page, so that the React functionComponent for each page can be referenced in menus, etc.
    This seems like a good idea :) But now can't easily run a standalone script that references page-data.ts
    React issue, not a typescript issue

    Easy solution, create separate importable file with only the React components, but this has serious separation of concerns issues

    Babel. During build, use babel to parse page-info and generate a new version without the React references, then run make-sitemap
    yarn add @babel/core @babel/cli
    npx babel --config-file ../../.babelrc page-info.ts
    Can use babel inside the make-sitemap script ...
    npx babel --config-file ../../.babelrc page-info.ts

    Parse page-info file in TS. Babel may not run without resolving all references ...

    Simple Regexp approach

*/

// make whole thing IEEE
// (async function () {
// })();

// constants
const pageDataFileName = "page-info.ts"
const pageDataName = "pageData"

// Open page-info.ts
let PAGE_DATA = "";

PAGE_DATA = fs.readFileSync(`./${pageDataFileName}`, { encoding: "utf8"});

// get allPages

// const m1Regexp = new RegExp( `allPages:\\s+${pageDataName}\\s*=\\s*\\[`)
const m1Regexp = new RegExp(`allPages:`)

const m1 = PAGE_DATA.search(m1Regexp)
let m1String = ""
if (m1 > 0) {
  m1String = PAGE_DATA.slice(m1)
} else {
  new Error(`make-sitemap.ts: Could not find ${pageDataName} in file ${pageDataFileName}. \n File read ${PAGE_DATA}`)
}
console.log(`matched ${m1String}`);
const mArr = m1String.matchAll(/\{(.*)\}/)

// const matchArray = [...m1String.matchAll(/\{(.*)\}/)]; 
// if (matchArray.length > 0) {
//   for (let i=0 ; i < matchArray.length ; i++) {
//     console.log(matchArray[i][1].replace('\n',' '))
//   }

//}
/*
// Open file, abort on error
let SITEMAP;
try {
  SITEMAP = fs.openSync("../../public/sitemap.xml", "w")
}
catch (err) {
  console.log(`make-sitemap: Unable to create /public/sitemap.xml`)
  new Error (err)
}

fs.appendFileSync(SITEMAP, `Beautiful header`)

// allPages.forEach( (item) => {
//   fs.appendFileSync(SITEMAP,`A line item for ${item.name}`)
// })

fs.appendFileSync(SITEMAP, `Beautiful footer`)
*/