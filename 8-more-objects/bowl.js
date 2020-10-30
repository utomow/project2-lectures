
// I would probably use a class now that ES6 is native in many browsers
class Bowl {
  constructor(capacity) {
    console.info("\nFinding a bowl of size " + capacity + "mL.")
    this.capacity = capacity,
    this.contents = [],
    this.greased = false,
    this.description = "Bowl with capacity of " + capacity + "mL."
    // this.contentsDescription = this.getContentsDescription();
  }

  add(someStuff) {
    console.info("Adding " + someStuff.description + " to " + this.description)
    // check capacity first and maybe throw an error
    this.contents.push(someStuff)
    // this.contentsDescription = this.getContentsDescription();
    // console.log(this.contentsDescription)
  }

  mixContent() {
    if (this.contents.length == 0) {
      console.warn("Nothing in bowl to mix!")
    } else {
      console.info("Mixing " + this.getContentsDescription() + " in " + this.description)
      this.contents =[]
      this.contents =[ {ingredient: "soft dough", description: "soft dough"}]
    }
  }

  punchContent()
  {
    if (this.contents.length == 0) {
      console.warn("Nothing in bowl to punch!")
    } else {
      console.info("Punching down " + this.getContentsDescription() + " in " + this.description)
      this.contents = []
      this.contents = [{ingredient: "dough", description: "dough"}]
    }
  }

  coverContent() {
    console.info("Putting cover on " + this.description)
  }

  grease() {
    console.info("Applying grease on " + this.description)
    this.greased = true;
    this.description = "Greased bowl with capacity of " + this.capacity + "mL."
  }

  removeContent() {
    if (this.contents.length == 0) {
      console.warn("Nothing on " + this.description + " to remove.")
    } else {
      console.info("Removing " + this.getContentsDescription() + " from " + this.description)
      return this.contents.pop()
    }
  }


  getContentsDescription() {
    if (this.contents.length == 0) {
      return "";
    } else {
      let contentsStr = []
      this.contents.forEach(element => {
        contentsStr.push(element.description)
      });
      return contentsStr.join(', ')
    }
  }
} 
  
  
module.exports = Bowl