# Website for Cheng Man Ching Sacramento Tai Chi website - Technical details

John Webster

Github <https://github.com/johnlobster/tcc-cmcsacramento>

## Set up

created using create-react-app


npx create-react-app my-app --template typescript

## Set up development environment

### Required environment variables

`GH_OA_TOKEN`

github authorization token, allows server to pull and push from github

`REACT_APP_BUILD_MODE`

Building for web removes most of the code specific to author. Values are `author` and `web`
If it is not there, then create-create-act won't do tree shaking and the front end may crash

## Favicon generation

[Real favicon generator](https://realfavicongenerator.net/)

used svg as starting point

## templating

I used `create-react-app` to scaffold, but wanted something that would create new components

hygen (after global installation using `yarn global add hygen`)

``` bash
hygen init self
hygen generator new comp
```
Edit templates in `_templates/comp/new`

hygen doesn't seem to be able to look up the tree to find `<root>/_templates`, which seems a little odd

Workaround - add `.hygen.js` file at root (it does look up the tree for this file)

``` js
module.exports = {
  templates: `${__dirname}/_templates`
}
```

Then cd to directory (`src/components` or `src/pages`) and use hygen
``` bash
hygen comp new ComponentName
```
[hygen documentation](https://www.hygen.io/docs/quick-start)

## Deployment

### web (user)

Netlify has been set up to deploy from pushes to `releaseWeb` branch

Release procedure is
1. check out `releaseWeb`
2. merge from dev
3. run all checks
4. check build `yarn build:web`
5. check that build is ok
6. check in any changes, commit
7. push to github - this will trigger Netlify release
8. merge any changes back into dev and master
9. check Netlify release didn't crash

### Author

## Netlify cli

Transfer .env variables to netlify release area

```bash
netlify env:import .env
```

Switch to a new netlify site
```bash
netlify unlink
netlify link --name relaxed-murdock-358ec5
```






