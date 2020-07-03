
import theme from "./theme"

it("Loads theme without crashing", () => {
  expect(theme).toBeDefined()
})

test.todo("Write some more tests for theme generator")

type Temp = any | undefined


it("Checks h1 is present in overrides.MuiCssBaseline", () => {
  expect(theme.overrides).toBeDefined();
  try {
    if (theme.overrides && theme.overrides.MuiCssBaseline) {
      expect(theme.overrides.MuiCssBaseline).toBeDefined();
      if ( theme.overrides.MuiCssBaseline["@global"] ) {
        expect(theme.overrides.MuiCssBaseline["@global"]).toBeDefined();
        expect(theme.overrides.MuiCssBaseline["@global"].h1).toBeDefined();
      }
    }

  }
  catch {
    console.log("h1 entry not created")
    expect(true).toEqual(false)
    // raising jest error instead of throwing an error
  }

})
test.todo("more makeGlobalsFromTheme testing")
