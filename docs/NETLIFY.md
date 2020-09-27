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


