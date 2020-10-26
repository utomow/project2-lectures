
function getBowl(size) {
  console.info("Finding a bowl of size " + size + "mL")
  let bowl = {
    capacity: size,
    contents: [],
    description: "bowl of size " + size + "mL"
  }
  return bowl
}
  
function addToBowl(bowl, someStuff) {
  console.info("Adding " + someStuff.description + " to " + bowl.description)
  bowl.contents.push(someStuff)
}

function printContents(bowl) {
  console.info("The " + bowl.description + " contains: ")
  bowl.contents.forEach((stuff) => {
    console.info("  " + stuff.description)    
  })
}
  
module.exports = {
    getBowl,
    addToBowl,
    printContents
}