const Container = require("./container")
const Ingredient = require("./ingredient")
const materials = require("./material")

class Bowl extends Container {
  constructor(volume) {
    super(volume)
    console.info("Finding bowl with a capacity of " + volume + " mL")
    this.description = "bowl with a capacity of " + volume + " mL"
    this.greased = false
  }

  grease() {
    console.info("Applying grease to bowl lightly")
    this.description = "lightly greased bowl with a capacity of " + this.volume + " mL"
    this.greased = true;
  }

  mixContent() {
    console.info("Mixing bowl contents.")
    if (this.containerContains("Yeast") && this.containerContains("Water") && this.containerContains("Sugar")) {
      let newIngredient = new Ingredient()
      newIngredient.name = "Yeast mixture";
      newIngredient.volume = this.getContentsTotalVolume();
      newIngredient.weight = this.getContentsTotalWeight();
      newIngredient.description = newIngredient.volume + "mL of bubbly yeast mixture"
      newIngredient.form = "fluid"
      this.replaceContent(newIngredient)
    } else if (this.containerContains('Yeast mixture') && this.containerContains("Flour") && this.containerContains("Oil") && this.containerContains("Salt")) {
      let newIngredient = new Ingredient()
      newIngredient.name = "Soft dough"
      newIngredient.volume = this.getContentsTotalVolume();
      newIngredient.weight = this.getContentsTotalWeight();
      newIngredient.description = newIngredient.weight + "gr of sticky smooth soft dough"
      newIngredient.form = "solid"
      this.replaceContent(newIngredient)
    }
  }

  
  punchContent() {
    console.info("Punching down bowl content.")
  }

}

module.exports = Bowl