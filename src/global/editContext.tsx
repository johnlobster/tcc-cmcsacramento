import React from 'react';

export type UpdateEditId = (newId: string) => void

const dummyUpdate: UpdateEditId = (newId) => {
  // do nothing
}
export const EditContext = React.createContext({ editorInstanceId: "", updateEditor: dummyUpdate })

