// function attached to message event listener

const validMessages = [
  'Ping',             // sent by author on startup
  'Save',             // author requests database
  'Load',             // author sending new database, will need to change messaging interface so can receive the data as well
]
const receiveMessage: (event: any) => void = (event) => {
  if (process.env.REACT_APP_BUILD_MODE === "author") {
    event.preventDefault(); 
    console.log(`Web: message ${event.data} received from ${event.origin}`);
    console.log(event.data); // might be an object so would be nice to pretty print

    // Check that message is in list of messages
    if ( validMessages.includes(event.data)) {
      if (event.data === "Ping") {
        event.source.postMessage(`Pong`, "*");
      } else if (event.data === "Save") {
        const dataString: string = JSON.stringify(window.appDb.save());
        event.source.postMessage(dataString, "*");
      } else if (event.data === "Load") {
        console.log(`Web:receiveMessage received Load - not implemented yet`)
      }
    } else {
      throw new Error(`Web:receiveMessage received unknown command ${event.data}`)
    }
  }
}

export default receiveMessage
