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

*/

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
