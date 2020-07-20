import processYT  from "./processYT";

const stripWhiteSpace: (inString: string) => string = (inString) => {
  return inString.replace(/[\s\n]/g, "")
}

it("Check empty string input", function(done) {
  expect(processYT("")).toEqual("")
  done()
})

it("Processes output with no eoembed", function(done) {
  const allTests = [
  `
  <div>
  </div>
  `,
  `
  <figure>
    <a href="myFancyUrl">
  </figure>
  `,
  `
  <div class="fred jim" >
    <p> Some text </p>
  </div
  `
  ]
  allTests.forEach( (item) => {
    expect(stripWhiteSpace(processYT(item))).toEqual(stripWhiteSpace(item))
    expect(processYT(item)).toEqual(item)

  }) 
  done()
})

it("Check simple output with oembed", function (done) {
  const simple =`
  <figure class="media"> 
    <oembed url="https://youtu.be/a2MxuknropY"> 
    </oembed> 
  </figure>
  `
  const output = stripWhiteSpace(`
  <figure class="media">
    <iframe type="text/html" 
        src="https://www.youtube.com/embed/a2MxuknropY"
    >
    </iframe>
  </figure>
  `)
  // console.log(`test input ${simple}`)
  // console.log(`test output ${output}`)

  expect(stripWhiteSpace(processYT(simple))).toEqual(output)
  done()
})

it("Check two oembed", function(done) {
  const double = `
  <figure class="media"> 
    <oembed url="https://youtu.be/hithereXXXX"> 
    </oembed> 
  </figure>
  <figure class="media"> 
    <oembed url="https://youtu.be/a2MxuknropY"> 
    </oembed> 
  </figure>
  `
  const output = stripWhiteSpace(`
  <figure class="media">
    <iframe type="text/html" 
        src="https://www.youtube.com/embed/hithereXXXX"
    >
    </iframe>
  </figure>
  <figure class="media">
    <iframe type="text/html" 
        src="https://www.youtube.com/embed/a2MxuknropY"
    >
    </iframe>
  </figure>
  `)

  expect(stripWhiteSpace(processYT(double))).toEqual(output)
  done()
})