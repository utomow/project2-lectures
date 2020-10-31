const Ingredient = require("./ingredient")

class Container {
  constructor(volume) {
    console.info("")
    this.volume = volume;
    this.contents = [];
    this.description = "container with a capacity of " + volume + " mL"
  }

  add(ingredient) {
    console.info("Adding " + ingredient.description + " to " + this.description)
    this.contents.push(ingredient)
  }

  removeContent() {
    if (this.contents.length != 0) {
      let returnedContent = this.contents.pop()
      console.info("Removing " + returnedContent.description + " from " + this.description)
      return returnedContent
    } else {
      console.warn(this.description + " is empty.")
    }
  }

  cover() {
    if (this.contents.length != 0){
      console.info("Covering " + this.description)
      let newIngredient = new Ingredient()
      newIngredient.name = "Dough"
      newIngredient.volume = this.getContentsTotalVolume() * 2;
      newIngredient.weight = this.getContentsTotalWeight();
      newIngredient.description = newIngredient.volume + "mL of rise to double volume dough with a weight of " + newIngredient.weight + "gr."
      newIngredient.form = "solid"
      this.replaceContent(newIngredient)
    } else {
      console.warn(this.description + " is empty!!")
    }
  }

  getContentsTotalWeight() {
    let totalWeight = 0;
    this.contents.forEach((stuff) => {
      totalWeight += stuff.weight
    });
    return totalWeight;
  }

  getContentsTotalVolume() {
    let totalVolume = 0;
    this.contents.forEach((stuff) => {
      totalVolume += stuff.volume
    });
    return totalVolume;
  }

  replaceContent(newContent) {
    this.contents = [newContent]
  }

  containerContains(ingredient) {
    let foundIt = false
    // console.log(ingredient)
    this.contents.forEach((stuff) => {
      // console.log("stuff name = " + stuff.name + ", ingredient = " + ingredient + ", " + (stuff.name == ingredient))
      if (stuff.name == ingredient) {
        foundIt = true
      }
    })
    return foundIt;
  }

  printContents() {
    console.info("The " + this.description + " contains: ")
    this.contents.forEach((stuff) => {
      console.info("  " + stuff.description)    
    })
    console.info("")
  }
}

module.exports = Container


