const fs = require("fs");
const { argv } = require("process");
const shell = require('shelljs');
const hb= require("handlebars");

function getTemplate() {
  const template = fs.readFileSync(
    "templates/component.hb", 
    { encoding: "UTF-8"});
  const HBtemplate = hb.compile(template);
  return HBtemplate;
}

function createFile(content, componentName) {
  const fileName = `${componentName}.tsx`;
  try {fs.writeFileSync(fileName, content)}
  catch {
    throw new Error(`write of file ${fileName} failed`);
  }
}

if ( argv.length < 3) {
  // run without arguments, implies directory
} else {
  // create single file
  let componentName = argv[2];
  let template = getTemplate();
  let fileData = template({component : componentName});
  createFile(fileData, componentName);
}