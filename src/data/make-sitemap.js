"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
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
var SITEMAP;
try {
    SITEMAP = fs_1["default"].openSync("../../public/sitemap.xml", "w");
}
catch (err) {
    console.log("make-sitemap: Unable to create /public/sitemap.xml");
    new Error(err);
}
fs_1["default"].appendFileSync(SITEMAP, "Beautiful header");
// allPages.forEach( (item) => {
//   fs.appendFileSync(SITEMAP,`A line item for ${item.name}`)
// })
fs_1["default"].appendFileSync(SITEMAP, "Beautiful footer");
