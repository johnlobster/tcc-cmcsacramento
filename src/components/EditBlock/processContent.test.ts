import processContent  from "./processContent";

// careful with stripping white space, ends up with strings that are not syntactically correct that
// can't be parsed, so have to strip result, not input
const stripWhiteSpace: (inString: string) => string = (inString) => {
  return inString.replace(/[\s\n]/g, "")
}

it("Check empty string input", function(done) {
  expect(processContent("")).toEqual("")
  done()
})

it("Processes output with no iframe", function(done) {
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
    expect(stripWhiteSpace(processContent(item))).toEqual(stripWhiteSpace(item))
    expect(processContent(item)).toEqual(item)

  }) 
  done()
})

it("Check single iframe", function (done) {
  const output = stripWhiteSpace(`
  <figure class="media"> 
    <oembed url="https://youtu.be/a2MxuknropY"> 
    </oembed> 
  </figure>
  `)
  const single = `
  <figure class="media">
    <iframe type="text/html" 
        src="https://www.youtube.com/embed/a2MxuknropY"
    >
    </iframe>
  </figure>
  `
  

  expect(stripWhiteSpace(processContent(single))).toEqual(output)
  done()
})

it("Check two iframes", function(done) {
  const output = `
  <figure class="media"> 
    <oembed url="https://youtu.be/hithereXXXX"> 
    </oembed> 
  </figure>
  <figure class="media"> 
    <oembed url="https://youtu.be/a2MxuknropY"> 
    </oembed> 
  </figure>
  `
  const double = `
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
  `

  expect(stripWhiteSpace(processContent(double))).toEqual(stripWhiteSpace(output))
  done()
})

it("Mixed content", function(done) {
  const allInputs = [
    `
    <h1>The Title</h1>
    <figure class="media">
      <iframe type="text/html" 
        src="https://www.youtube.com/embed/hithereXXXX"
      >
      </iframe>
    </figure>
    <div>
      <div>
        Content
      </div>
    </div>
    <figure class="media">
      <iframe type="text/html" 
        src="https://www.youtube.com/embed/a2MxuknropY"
      >
      </iframe>
    </figure>
    <p>A paragraph</p>
    `,
    `
    <h1>The Title</h1>
    <figure class="media">
      <iframe type="text/html" 
        src="https://www.youtube.com/embed/hithereXXXX"
      >
      </iframe>
    </figure>
    <figure class="image">
      <img src="https://www.mySite.com/amazingImage.jpg" alt="Wow" />
    </figure>
    <figure class="media">
      <iframe type="text/html" 
        src="https://www.youtube.com/embed/a2MxuknropY"
      >
      </iframe>
    </figure>
    <p>A paragraph</p>
    `,
  ]
  const allOutputs = [
    `
    <h1>The Title</h1>
    <figure class="media" >
      <oembed url="https://youtu.be/hithereXXXX" >
      </oembed> 
    </figure>
    <div>
      <div>
        Content
      </div>
    </div>
    <figure class= "media" >
      <oembed url="https://youtu.be/a2MxuknropY" >
      </oembed> 
    </figure>
    <p>A paragraph</p>
    `,
    `
    <h1>The Title</h1>
    <figure class="media" >
      <oembed url="https://youtu.be/hithereXXXX" >
      </oembed> 
    </figure>
    <figure class="image">
      <img src="https://www.mySite.com/amazingImage.jpg" alt="Wow" />
    </figure>
    <figure class= "media" >
      <oembed url="https://youtu.be/a2MxuknropY" >
      </oembed> 
    </figure>
    <p>A paragraph</p>
    `,
  ]
  allInputs.forEach((item,index) => {
    expect(stripWhiteSpace(processContent(item))).toEqual(stripWhiteSpace(allOutputs[index]))
  }) 
  done()
})

it("Tests strings that don't need to be whitespace stripped", function(done) {
  const allInputs = [
    `<figure class="media"><iframe type="text/html" src="https://www.youtube.com/embed/hithereXXXX"></iframe></figure>`,
    `<div>div content</div><figure class="media"><iframe type="text/html" src="https://www.youtube.com/embed/hithereXXXX"></iframe></figure>`,
  ]
  const allOutputs = [
    `<figure class="media"><oembed url="https://youtu.be/hithereXXXX"></oembed></figure>`,
    `<div>div content</div><figure class="media"><oembed url="https://youtu.be/hithereXXXX"></oembed></figure>`,    
  ]
  allInputs.forEach((item, index) => {
    expect(processContent(item)).toEqual(allOutputs[index])
  }) 
  done()
})

it("Tests strings with extra spaces (not whitespace stripped)", function (done) {
  const allInputs = [
    `<figure class="media" > <iframe  type="text/html"  src="https://www.youtube.com/embed/hithereXXXX"> </iframe> </figure >`,
    `<div >div  content</div >   <figure class="media"  ><iframe type="text/html"  src="https://www.youtube.com/embed/hithereXXXX"   > </iframe></figure>`,
  ]
  const allOutputs = [
    `<figure class="media" > <oembed url="https://youtu.be/hithereXXXX"></oembed> </figure >`,
    `<div >div  content</div >   <figure class="media"  ><oembed url="https://youtu.be/hithereXXXX"></oembed></figure>`,
  ]
  allInputs.forEach((item, index) => {
    expect(processContent(item)).toEqual(allOutputs[index])
  })
  done()
})
