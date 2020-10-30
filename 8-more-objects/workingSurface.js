class WorkingSurface {
  constructor (length, width) {
    console.info("\nFinding a working surface the dimension of" + length + " cm. long and " + width + " cm. wide.");
    this.length = length,
    this.width = width,
    this.floured = false,
    this.description = "Working surface with a the size of " + length + " cm. long and " + width + " cm. wide.",
    this.contents = []
  }

  putFlour() {
    console.log("Sprinkle some flour on " + this.description);
    this.floured = true;
    this.description = "Floured working surface with the size of " + this.length + " cm. long and " + this.width + " cm. wide."
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

  add(someStuff) {
    console.info("Adding " + someStuff.description + " to " + this.description)
    // check capacity first and maybe throw an error
    this.contents.push(someStuff)
  }

  kneadContent()
  {
    if (this.contents.length == 0) {
      console.warn("Nothing to knead!")
    } else {
      console.info("Kneading " + this.getContentsDescription() + " until smooth and elastic on " + this.description)
      this.contents =[]
      this.contents =[{dough: "dough", description: "dough"}]
    }
  }

  divideContent() {
    console.info("Divide " + this.getContentsDescription() + " into 2 parts.")
    this.contents = [];
    this.contents = [
      {dough: "dough", description: "half part dough"},
      {dough: "dough", description: "half part dough"}
    ]
  }

  removeContent() {
    if (this.contents.length == 0) {
      console.warn("Nothing on " + this.description + " to remove.")
    } else {
      console.info("Removing " + this.getContentsDescription() + " from " + this.description)
      return this.contents.pop()
    }
  }

  shapeContent() {
    console.info("Shape " + this.getContentsDescription())
  }
}

module.exports = WorkingSurface