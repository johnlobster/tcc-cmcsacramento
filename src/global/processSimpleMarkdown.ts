
export const processSimpleMarkdown: (string) => string = (inString) => {
  // replace italic marker with html <i></i> or ignore
  const rExp = /\*(.*)\*/;
  return (inString.replace(rExp, '<i>$1</i>'))
}