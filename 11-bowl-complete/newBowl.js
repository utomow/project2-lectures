const Container = require("./container")

class Bowl extends Container {
  constructor(name, capacity) {
    parent(name, capacity)
  }

  grease() {

  }

  mix() {
    if (this.isIngredientPresent("sugar") && this.isIngredientPresent("yeast") && this.isIngredientPresent("water")) {
      let newContents = [
        {
          ingredient: "Yeast mixture",
          amount: this.getContentTotalVolume()
        }
      ]
    } else if (this.isIngredientPresent("Yeast mixture"))
    this.replaceContent(newContents)
  }

  isIngredientPresent(ingredient) {
    this.contents.forEach(content => {
      if (content.ingredient === ingredient) {
        return true;
      }
      return false;
    });
  }


  knead() {

  }

  punch() {

  }

  cover() {

  }

}

module.exports = Bowl