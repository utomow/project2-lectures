const Container = require("./container.js")

class Pan extends Container {
  constructor(length, width, volume) {
    console.info("Finding a pan with a dimension of " + length + " mm and " + width + " mm");
    super(volume)
    this.length = length;
    this.width = width;
    this.description = "A pan with a dimension of " + length + " mm and " + width + " mm"
    this.greased = false
  }

  grease() {
    console.info("Applying grease to pan lightly")
    this.description = "A lightly greased pan with a dimension of " + this.length + " mm and " + this.width + " mm"
    this.greased = true;
  }

}

module.exports = Pan