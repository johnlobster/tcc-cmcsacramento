# Notes on Netlify integration

## netlify cli

Took 5 attempts to log in. No idea why the 5th time worked

```
$ netlify functions:list                                                                                                         Based on local functions folder C:\Users\JohnL\webDev\tcc-cmcsacramento\.netlify\functions, these are the functions detected
.------------------------------------------------------------------------------------------.
|                      Netlify Functions (in local functions folder)                       |
|------------------------------------------------------------------------------------------|
|  Name  |            Url             |                moduleDir                | deployed |
|--------|----------------------------|-----------------------------------------|----------|
| mailer | /.netlify/functions/mailer | C:\Users\JohnL\webDev\tcc-cmcsacramento | no       |
'------------------------------------------------------------------------------------------'
```

```
netlify dev
```
auto detected and built functions

ran yarn start I think
```
react-scripts start
```
my hash navigation didn't work, but react-router seemed ok
Did do any builds

Normally I would run `yarn dev`

Postman POST to `localhost:8888/.netlify/functions/mailer.js`
Returned "function not found"
```
Request from ::1: POST /.netlify/functions/mailer.js
Response with status 404 in 1 ms.
```

2nd attempt ...
same, neither port did anything
Postman POST to `localhost:8888/.netlify/functions/mailer`
Did something, but major errors ... same as with `netlify-lambda serve`
```
Response with status 500 in 68 ms.
◈ Error during invocation:  {
  errorMessage: 'regeneratorRuntime is not defined',
  errorType: 'ReferenceError',
  stackTrace: [
    'Object.d (C:\\Users\\JohnL\\webDev\\tcc-cmcsacramento\\.netlify\\functions\\mailer.js:1:141235)'
```
Minified, so effectively impossible to debug, but clearly related to netlify compilation/build 
Threw error and stopped the server

From another window while dev server started
```
netlify functions:invoke mailer
◈ "port" flag was not specified. Attempting to connect to localhost:8888 by default
? Invoke with emulated Netlify Identity authentication headers? (pass --identity/--no-identity to override) No
◈ Function invocation failed: [object Object]
```
crashed dev server as before


Trying to deploy through website. This will crash because .env variables not present

```
5:25:43 PM: Failed during stage 'building site': Deploy directory 'build:functions' does not exist
```
No idea why it should

calling function 
```
https://www.cmctaichisacramento.com/.netlify/functions/mailer
```
Causes a 404. Not surprising

Manually added functions in GUI

So, although I am running netlify dev, still using netlify-lambda, which is probably the source of my issues

I had 
```
[build]
  command = "yarn build:functions"
  functions = ".netlify/functions/"
  publish = "build:functions"
```
No doubt the reason why it crashed, removed publish

```
info
1 plugin ran successfully

Click for details.

@netlify/plugin-functions-core
```
I didn't ask for that ...

```
5:37:44 PM: Failing build: Failed to build site
5:37:45 PM: Failed during stage 'building site': Deploy directory 'build' does not exist
5:37:45 PM: Finished processing build request in 1m41.283058887s
```

As I suspected, mono repo creates massive problems

had 'build:functions' in `package.json` instead of `yarn build:functions`
Now deployment is clean

(Loading is pretty slow ...)

Postman can now hit and get a result, but same error 'regeneratorRuntime is not defined'

--------------------------------------------
9/27/20
Getting places

Need
@babel/plugin-transform-runtime
yarn add and in .babelrc

This babel plugin is needed to support async await ....

```
localhost:9000/.netlify/functions/mailer
```
Hits the function when started with 
```
yarn dev:functions
"dev:functions": "npx netlify-lambda -c functions-webpack-override serve functions",
```

```
netlify link
netlify env:import .env
```
No idea why I had to link, I thought that I already had ...

The real problem here is being able to separate the concerns
- typescript
- `async await`
- code bugs
- environment mistakes
- standalone testing environment (with Jest module issues)
- function debug (I had problems with nodemailer and comcast)
- changes in netlify code and documentation
- netlify dev still under development
- should I be using `netlify-lambda build` ?

Works, but can be running for > 10 seconds causing timeout
No idea why it is so slow, could experiment with a simpler function that just returns a value
There is an issue here, could extend duration of function. Could return without waiting for result from nodemailer

Timeout didn't give an error in the function, so didn't log contact information ...

Don't have this issue when running locally ...

I wonder if load of 200k function isn't part of the problem

-----------------------------
9/28

Have it up and going, but getting proxy error - more related to create-react-app
 
```
$ netlify dev -c yarn start                                                              ◈ Netlify Dev ◈
◈ Injected build setting env var: REACT_APP_BUILD_MODE
◈ Injected build setting env var: EMAIL_ADDRESS
◈ Injected build setting env var: NODEMAILER_HOST
◈ Injected build setting env var: NODEMAILER_PORT
◈ Injected build setting env var: NODEMAILER_SECURE
◈ Injected build setting env var: NODEMAILER_AUTH_USERNAME
◈ Injected build setting env var: NODEMAILER_AUTH_PASSWORD
◈ Injected build setting env var: EMAIL_LIST
◈ Injected build setting env var: CONTACT_DATA
◈ Injected build setting env var: NETLIFY_AUTH_TOKEN
◈ Overriding the following env variables with .env file: REACT_APP_BUILD_MODE,EMAIL_ADDRESS,NODEMAILER_HOST,NODEMAILER_PORT,NODEMAILER_SECURE,NODEMAILER_AUTH_USERNAME,NODEMAILER_AUTH_PASSWORD,EMAIL_LIST,CONTACT_DATA,NETLIFY_AUTH_TOKEN
◈ Overriding command with setting derived from netlify.toml [dev] block:  yarn
◈ Function builder netlify-lambda detected: Running npm script build:functions
 »   Warning: ◈ This is a beta feature, please give us feedback on how to improve at
 »   https://github.com/netlify/cli/
◈ Function builder netlify-lambda building functions from directory functions
◈ Function builder netlify-lambda finished building functions from directory functions
◈ Functions server is listening on 57664
◈ Starting Netlify Dev with create-react-app
yarn install v1.17.3
warning ..\package.json: No license field
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.83s.
◈ "yarn" exited with code 0. Shutting down Netlify Dev server

JohnL@DESKTOP-A2OD0L1 MINGW64 ~/webDev/tcc-cmcsacramento (dev)
$
```

------------------
10/3

Try removing my function dev stuff from package.json (branch funcTest)

old scripts
```json
"scripts": {
    "start": "npx cross-env REACT_APP_BUILD_MODE='author' react-scripts start",
    "dev": "yarn start",
    "dev:web": "npx cross-env REACT_APP_BUILD_MODE='web' react-scripts start",
    "dev:functions": "npx netlify-lambda -t 60 -p 9000 -c functions-webpack-override serve functions",
    "build:functions": "npx netlify-lambda build functions",
    "build:web": "yarn build:functions && npx cross-env REACT_APP_BUILD_MODE='web' CI= react-scripts build",
    "build:author": "yarn build:functions && npx cross-env REACT_APP_BUILD_MODE='author' CI= react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint --quiet \"src/**/*.tsx\" \"src/**/*.ts\" "
  },
  ```
  
  Messing with node version got rid of anything installed using node

  ```
  npm install netlify-cli -g
  ```
  