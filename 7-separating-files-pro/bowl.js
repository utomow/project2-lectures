
// I would probably use a class now that ES6 is native in many browsers
class Bowl {
  constructor(size) {
    console.info("Finding a bowl of size " + size + "mL")
    this.capacity = size
    this.contents = []
  }

  add(someStuff) {
    console.info("Adding " + someStuff.description + " to " + this)
    // check capacity first and maybe throw an error
    this.contents.push(someStuff)
  }

  toString() {
    return "bowl of size " + this.capacity + "mL"
  }
}
  
  
module.exports = Bowl