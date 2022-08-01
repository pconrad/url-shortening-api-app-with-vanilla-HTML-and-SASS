let rebrandlyClient = require("./rebrandly.js")
let slashtag = `test-${Math.floor(Math.random()*999999)}`
//for the sake of example, slashtag should always be different
//if you do not specify one, a random (and collision-free) one will be used

let linkDef = {
  "title": "My first link",
  "slashtag": slashtag,  
  "destination": "https://www.google.com"
};

let onError = (err) => {
  console.log(JSON.stringify(err))
}

let onLinkCreated = (link) => {
  console.log(`Congratulations ${account.fullName}! You just created your first link.`)
  console.log(`Link ID is ${link.id}`)
  console.log(`Short URL is: https://${link.shortUrl}`)
  console.log(`Destination URL is: ${link.destination}`)       
}

rebrandlyClient.createNewLink(linkDef, onLinkCreated, onError);