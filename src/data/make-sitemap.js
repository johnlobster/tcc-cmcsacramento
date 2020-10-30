fs = require('fs')

// constants
const pageDataFileName = "page-info.ts"
const pageDataName = "pageData"
const webPage = "https://www.cmctaichisacramento.com"

// import {allPages} from './page-info'

// This is a dev script that runs some time during build
// Generates /public/sitemap.xml using data in page-info

// This is a mess, I know. Was harder than I thought, and haven't cleaned up yet

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

/*
    sitemap
    Most useful field for SEO is the date that the page had a meaningful content change -- this might be harder to figure out from page-info
    https://www.searchenginejournal.com/technical-seo/xml-sitemaps/
*/

// Open page-info.ts
let PAGE_DATA = "";

PAGE_DATA = fs.readFileSync(`./${pageDataFileName}`, { encoding: "utf8"});
// console.log(PAGE_DATA)

// get allPages

// const m1Regexp = new RegExp( `allPages:\\s+${pageDataName}\\s*=\\s*\\[`)
const m1Regexp = new RegExp(`allPages:`)

const m1 = PAGE_DATA.search(m1Regexp)
let m1String = ""
if (m1 > 0) {
  m1String = PAGE_DATA.slice(m1)
  // console.log(m1String)
} else {
  new Error(`make-sitemap.ts: Could not find ${pageDataName} in file ${pageDataFileName}. \n File read ${PAGE_DATA}`)
}
// console.log(`matched ${m1String}`);
// const mArr = m1String.matchAll(/\{(.*)\}/)

// const m2 = m1String.match(/\{/)
// console.log(m2)

// Open file, abort on error
let SITEMAP;
try {
  SITEMAP = fs.openSync("../../public/sitemap.xml", "w")
}
catch (err) {
  console.log(`make-sitemap: Unable to create /public/sitemap.xml`)
  new Error(err)
}

fs.appendFileSync(SITEMAP,
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`)

const m2String = m1String.replace(/\n/g,'')
// console.log(`m2String: ${m2String}`)
const matchArray = [...m2String.matchAll(/{([^}]+)/g)]; 
  // console.log(matchArray)
if (matchArray.length > 0) {
  for (let i=0 ; i < matchArray.length ; i++) {
    // console.log(`iteration ${i} matched ${matchArray[i][1].replace(/\n+/,' ')}`)
    // console.log(`iteration ${i} # matches ${matchArray[i].length} matched ${matchArray[i][1]}`)
    let [,name] = matchArray[i][1].match(/name:\s*"([^"]*)"/)
    let [,title] = matchArray[i][1].match(/title:\s*"([^"]*)"/)
    fs.appendFileSync(SITEMAP, 
      `
      <url>
        <loc>${webPage}/${name}</loc>
        <changefreq>weekly</changefreq>
      </url>
      `)
    console.log(`name ${name} title ${title}`)

  }

}



// allPages.forEach( (item) => {
//   fs.appendFileSync(SITEMAP,`A line item for ${item.name}`)
// })

fs.appendFileSync(SITEMAP, `</urlset>\n`)
