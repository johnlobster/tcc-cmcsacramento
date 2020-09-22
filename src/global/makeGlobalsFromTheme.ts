import { Theme, createMuiTheme } from '@material-ui/core/styles'
import { Variant } from '@material-ui/core/styles/createTypography';

// this function uses the information from typography.<tag> to set the same values on the default tags
// so that <Typography></Typography> doesn't have to be used all over the place
// MuiCssBaseline is used to contain all in one place. '@global' could be used on any injected style sheet
// tagsList is a list of tags that will have their styles set
// typography only supports some tags (Variant type)
// checks to see if typography tag exists before adding to theme

const makeGlobalsFromTheme: (inputTheme: Theme, tagsList: string[]) => Theme = ( inputTheme, tagsList) => {

    const allTags: any = {}
  
    for(  const i in tagsList) {
      // check if exists
      if (inputTheme.typography[tagsList[i] as Variant]) {
        allTags[tagsList[i]] = inputTheme.typography[tagsList[i] as Variant]
        console.log(`makeGlobalsFromTheme: `)
        console.log(inputTheme.typography[tagsList[i]])
      }
    }
    
    const outputTheme: Theme = createMuiTheme( inputTheme, {
      overrides: {
        MuiCssBaseline: {
          '@global': allTags,
        },
      }
    })

  console.log(`makeGlobalsFromTheme theme = \n ${outputTheme}`)
  return outputTheme;
}


export default makeGlobalsFromTheme;