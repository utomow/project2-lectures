
function getBowl(size) {
  console.info("Finding a bowl of size " + size + "mL")
  return {
    capacity: size,
    contents: [],
    description: "bowl of size " + size + "mL"
  }
}
  
function addToBowl(bowl, someStuff) {
  console.info("Adding " + someStuff.description + " to " + bowl.description)
}
  
module.exports = {
    getBowl,
    addToBowl
}