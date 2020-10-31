const Container = require("./container.js")
const Ingredient = require("./ingredient")

class WorkSurface extends Container{
  constructor(length, width) {
      super()
      console.info("Finding a work surface with a dimension of " + length + " mm and " + width + " mm");
      this.length = length;
      this.width = width;
      this.description = "work surface with a dimension of " + length + " mm and " + width + " mm"
      this.floured = false;
  }

  flour() {
      console.info("Sprinkle some flour on work surface")
      this.description = "lightly floured work surface with a dimension of " + this.length + " mm and " + this.width + " mm"
      this.floured = true;
  }

  kneadContent() {
    if (this.containerContains("Soft dough") && this.floured) {
      console.info("Kneading the content.")
      let newIngredient = new Ingredient()
      newIngredient.name = "Dough";
      newIngredient.volume = this.getContentsTotalVolume();
      newIngredient.weight = this.getContentsTotalWeight();
      newIngredient.description = newIngredient.weight + "gr of smooth and elastic dough"
      newIngredient.form = "solid"
      this.replaceContent(newIngredient)
    } else if (this.containerContains("Soft dough") && !this.floured) {
      console.warn("Put some flour on work surface or you will get a messy surface!")
    }
  }

  divideContent() {
    console.info("Divide " + this.contents[0].description + " into 2 parts.")
    let newIngredient = new Ingredient()
    newIngredient.name = "Dough";
    newIngredient.volume = this.getContentsTotalVolume() / 2;
    newIngredient.weight = this.getContentsTotalWeight() / 2;
    newIngredient.description = newIngredient.weight + "gr of Half risen dough"
    newIngredient.form = "solid"
    this.contents = [newIngredient, newIngredient]
  }

  shapeContent() {
    console.info("Shaping the contents.")
    this.contents.forEach((ingredient) => {
      ingredient.name = "Dough"
      ingredient.description = ingredient.weight + "gr of loaf shaped half risen dough"
    })
  }
}

module.exports = WorkSurface