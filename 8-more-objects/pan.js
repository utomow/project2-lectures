class Pan {
  constructor( capacity) {
    console.log("\nFinding a pan with the capacity of " + capacity + "mL.")
    this.capacity = capacity;
    this.greased = false;
    this.description = "Pan with the capacity of " + capacity + "mL."
    this.contents = [];
  }

  grease() {
    console.info("Applying grease on " + this.description)
    this.greased = true;
    this.description = "Greased pan with capacity of " + this.capacity + "mL."
  }

  add(someStuff) {
    console.log("Adding " + someStuff.description + " into " + this.description);
    this.contents.push(someStuff);
  }

  shapeContent() {
    console.info("Shape into loaf " + this.getContentsDescription() + " in " + this.description)
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

module.exports = Pan