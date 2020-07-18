// javascript for author

/*
  - communicate with iframe
  - save iframe data
  - user name selection (save as cookie)

*/
let iframeElement; 

/***  Functions **********************************************************************************/

const postTest = () => {
  // don't use "*" in production
  console.log("Author: Send first message to iframe");
  iframeElement.contentWindow.postMessage("Ping", "*")
}

const saveData = () => {
  console.log("Author: Send save request to web page");
  iframeElement.contentWindow.postMessage("Save", "*")
}

const receiveMessage = (event) => {
  event.preventDefault(); // Probably doesn't bubble up
  console.log(`Author: Message received from ${event.origin}`);
  console.log(event.data);
  
  // Author sends a Ping to the iframe to check messaging interface
  // iframe replies with Pong
  if (event.data === "Pong") {
    console.log("Author: Ping response was Pong");
    return; 
  } else {
    // returning a database object
    const dataObj = JSON.parse(event.data);
    console.log(`Author received database`)
    console.log(`${dataObj}`);

    // send database to server
  //   window.axios.post("http://localhost:3000/write", dataObj)
  //   .then((response) => {
  //     if (response.status === 200) {
  //       // server received data
  //       console.log("author.js server data transfer confirmed");
  //     } else {
  //       console.log(`author.js data transfer failed. http returned ${response.status}`);

  //     }})
  //     .catch((error) => {
  //       if (error.response) { 
  //         console.log(`author.js http returned error code ${error.response.status}`);
  //       } else {
  //         // The request was made but no response was received 
  //         console.log(`author.js http request timed out`);
  //       }
  //     });
  }
}

/***************************************************** */
// execution starts after onload event


window.onload = () => {
  console.log("Author: document loaded");
  // initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // listen for messages from iframe
  window.addEventListener("message", receiveMessage);
  
  iframeElement = document.getElementById("iframeId")
  if (!iframeElement) {
    console.log("Author: Failed to find iframe element");
  } else {
    console.log("Author: found iframe element");
  }

  postTest()

  // what can author do ?
  let frame = iframeElement.contentDocument

  const allH1 = frame.getElementsByTagName('H1')

  console.log(allH1)
  console.log(frame)

  allH1[0].style.backgroundColor = 'green'
  
}