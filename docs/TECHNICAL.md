# Website for Cheng Man Ching Sacramento Tai Chi website

John Webster

Github <https://github.com/johnlobster/tcc-cmcsacramento>

## Technical details

### Set up development environment

#### Required environment variables

`GH_OA_TOKEN`

github authorization token, allows server to pull and push from github

`REACT_APP_BUILD_MODE`

Building for web removes most of the code specific to author. Values are `author` and `web`
If it is not there, then create-create-act won't do tree shaking and the front end may crash

#### Favicon generation

[Real favicon generator](https://realfavicongenerator.net/)

used svg as starting point

#### templating

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
