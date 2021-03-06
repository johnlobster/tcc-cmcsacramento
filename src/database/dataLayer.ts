

// gets latest value from the database. If the database doesn't have that entry, then return 
// the content passed through propsContent
const getInitialContent: (page: string, id: string, propsContent?: string) => string = (page, id, propsContent ) => {
  // page comes from useLocation().pathName
  // strip leading '/' and if there was no path, default to 'Home'
  let localPage: string
  if (page === '/') {
    localPage = 'Home'
  } else {
    localPage = page.replace( /\//, "")
  }
  const data = appDb.getData(localPage, id)
  console.log(`dataLayer.getInitialContact: page = ${localPage} id=${id} content=\n${data}`)
  if (data.length === 0) {
    // item did not exist in database
    if (propsContent) {
      // content may be passed into the edit block, as a short way to initialize database
      return `<div>${propsContent}</div>`
    } else {
      return ""
    }
  } else {
    return data
  }
}

export default getInitialContent