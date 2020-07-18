
const getInitialContent: (page: string, id: string, content?: string) => string = (page, id, content ) => {
  // page comes from useLocation().pathName
  // strip leading '/' and if there was no path, default to 'Home'
  let localPage: string
  if (page === '/') {
    localPage = 'Home'
  } else {
    localPage = page.replace( /\//, "")
  }

  const data = appDb.getData(localPage, id)
  if (data.length === 0) {
    // item did not exist in database
    if (content) {
      // content may be passed into the edit block, as a short way to initialize database
      return content;
    } else {
      return ""
    }
  } else {
    return data
  }
}

export default getInitialContent