const express = require("express");

const fs = require('fs');
// var shell = require('shelljs');

const path = require("path");
require("dotenv").config(); // add variables in .env file to process.env
const PORT = process.env.PORT || 3000;

// check NODE_ENV
const NODE_ENV = process.env.NODE_ENV || "development";

console.log(`server: NODE_ENV ${NODE_ENV}`);
// if NODE_ENV is undefined, that gets printed out before things start
// crashing

const ghToken = process.env.GH_OA_TOKEN || new Error("ENV variable GH_OA_TOKEN not set");

// heroku doesn't leave a git repo, will have to clone
// -b <branch> checkout just that branch
// --depth 1  -> shallow clone, only get most recent 
// <repo URL> <my directory> (e.g. github-source)

// // clone repo
// if (shell.exec(`git clone -b heroku-git-trial https://github.com/johnlobster/tcc-test.git github-repo`).code !== 0) {
//   shell.echo('Error: Git clone failed');
//   shell.exit(1);
// } else {
//   console.log("Successful clone to github-repo");
// }

// // let lsArray = shell.ls('github-repo');
// // console.log(`${lsArray.length} files in directory`);
// // lsArray.forEach( (value, index) => {console.log(value);})

// const cdString = shell.cd("github-repo");
// console.log("Change directory to github-repo ShellString: " + cdString);

// // let lsArray2 = shell.ls();
// // console.log(`${lsArray2.length} files in directory`);
// // lsArray2.forEach((value, index) => { console.log(value); })

// // check that we are on the right branch
// if (shell.exec('git branch').code !== 0) {
//   shell.echo('Error: Git branch failed');
//   shell.exit(1);
// }

// // create file before adding to git repo
// let fileName = "t3_" + uniqid();
// fs.writeFileSync(fileName, JSON.stringify(testData));

// // add explicitly because new file
// if (shell.exec('git add ' + fileName).code !== 0) {
//   shell.echo('Error: Git add failed');
//   shell.exit(1);
// }

// // set up user name and email
// shell.exec("git config user.name 'johnlobster'");
// shell.exec("git config user.email 'JohnLobster@comcast.net'");

// const dateStamp=new Date();
// console.log(dateStamp);
// const dsString = `${dateStamp.getHours()}${dateStamp.getMinutes()}${dateStamp.getSeconds()}`;
// if (shell.exec(`git commit -m "Auto-commit ${dsString}"`).code !== 0) {
//   shell.echo('Error: Git commit failed');
//   shell.exit(1);
// } else {
//   console.log('Git commit succeeded');
//   console.log();
// }

// // console.log();
// // console.log("config file");
// // const cFile = shell.cat(".git/config");
// // console.log(cFile);
// // console.log();

// if (shell.exec(`git push https://${ghToken}@github.com/johnlobster/tcc-test.git`).code !== 0) {
//   shell.echo('Error: Git push failed');
//   shell.exit(1);
// } else {
//   console.log('Git push succeeded');
// }

// set up express
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// logging 
app.use(function (req, res, next) { 
  const now = new Date()
  console.log(`Accessed server ${now.toTimeString()} Method: ${req.method} URL : ${req.url}`); 
  next(); 
});

// routes
app.post("/write", (req, res) => {
  console.log(`Object after express`);
  console.log(req.body);
  // let allKeys = objIn.entries();
  // console.log(`Entries - ${allKeys}`);
  let writeOk = true;
  for (const [pageName, pageData] of Object.entries(req.body)) {
    // const fData = JSON.stringify(pageData);
    let fileName = `src/data-${pageName}.json`;
    console.log(`Write file ${fileName}`)
    console.log(`Type of pageData is ${typeof(pageData)}`)
    const jsonData = JSON.stringify(pageData)
    console.log(`Data typData: ${jsonData}`);
    try{
      fs.writeFileSync(fileName, jsonData);
    }
    catch (e) {
      console.log("File write failed");
      console.log(e)
      writeOk = false;
    }
  }

  if (writeOk) {
    res.status(200).end();
  } else {
    res.status(204).end();
  }
  
})

/*
  This server serves both the html within the iframe and any files
  that are needed by the author html (authorIndex.css, authorServer.js)
*/

// no url, serve authorIndex
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "authorIndex.html"));
  console.log(`Serving authorIndex.html`);
});
// serve author stuff
app.get("/author*", (req, res, next) => {
  // matched one of the author files so serve it
  const fileName = req.url.replace( /^\//, "") // strip leading '/'
  if (fs.existsSync(fileName)) {
    console.log(`Serving author file ${fileName}`);
    res.sendFile(path.join(__dirname, fileName));
  } else {
    console.log(`Couldn't find file ${fileName}`);
    next()
  }
});

// files that the iframe will look for
app.use(express.static("build"));

// default
app.get("*", (req, res) => {
  console.log(`Default: unable to serve file ${req.url}`);
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server listening on port ${PORT}`);
});
