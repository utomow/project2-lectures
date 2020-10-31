const Container = require("./container.js")
const Ingredient = require("./ingredient")

class WorkSurface extends Container{
  constructor(length, width) {
      super()
      console.info("Finding a work surface with a dimension of " + length + " mm and " + width + " mm");
      this.length = length;
      this.width = width;
      this.description = "A working surface with a dimension of " + length + " mm and " + width + " mm"
      this.floured = false;
  }

  flour() {
      console.info("Sprinkle some flour on working surface")
      this.description = "A lightly floured working surface with a dimension of " + this.length + " mm and " + this.width + " mm"
      this.floured = true;
  }

  kneadContent() {
    if (this.containerContains("Soft dough") && this.floured) {
      console.info("Kneading the content.")
      let newIngredient = new Ingredient()
      newIngredient.name = "Dough";
      newIngredient.description = "Smooth and elastic dough"
      newIngredient.volume = this.getContentsTotalVolume();
      newIngredient.weight = this.getContentsTotalWeight();
      newIngredient.form = "solid"
      this.replaceContent(newIngredient)
    } else if (this.containerContains("Soft dough") && !this.floured) {
      console.warn("Put some flour on working surface or you will get a messy surface!")
    }
  }

  divideContent() {
    console.info("Divide " + this.contents[0].description + " into 2 parts.")
    let newIngredient = new Ingredient()
    newIngredient.name = "Dough";
    newIngredient.description = "Half risen dough"
    newIngredient.volume = this.getContentsTotalVolume() / 2;
    newIngredient.weight = this.getContentsTotalWeight() / 2;
    newIngredient.form = "solid"
    this.contents = [newIngredient, newIngredient]
  }

  shapeContent() {
    console.info("Shaping the contents.")
    this.contents.forEach((ingredient) => {
      ingredient.name = "Dough"
      ingredient.description = "Loaf shaped half risen dough"
    })
  }
}

module.exports = WorkSurface