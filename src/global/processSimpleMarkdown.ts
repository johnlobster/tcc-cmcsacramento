
// React cannot insert HTML directly, would like to allow inline formatting, particularly for italics

// processSimpleMarkdown turns a string into an array with each word creating a (type, value) tuple
export interface TxtArr {
  type: "Plain" | "Italic";
  value: string;
}
export const processSimpleMarkdown: (ins: string) => TxtArr[] = (ins) => {
  const rExp = /\*(.*)\*/;
  const outArray: TxtArr[] = [];
  (ins.split(/\s+/)).forEach((value, index) => {
    if (value.match(rExp)) {
      const str = value.replace(rExp, "$1 ")
      outArray[index] = { type: "Italic", value: str }
    } else {
      outArray[index] = { type: "Plain", value: value }
    }
  })
  return (outArray)
}
