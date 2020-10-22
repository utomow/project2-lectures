const TEASPOON = 5 // mL
const TABLESPOON = 15 // mL
const CUP = 250 // mL

const Ingredients = {
    yeast: "yeast",
    water: "water",
    sugar: "sugar",
    salt: "salt",
    flour: "flour",
    oil: "oil"
}

function measure(stuff, amount) {
  console.info("Measuring " + amount + "mL of " + stuff)
  return {
      ingredient: stuff,
      amount: amount,
      description: amount + "mL of " + stuff
  }
}

// Do the recipe!
console.log("Let us begin!")

let someYeast = measure(Ingredients.yeast, 1 * TEASPOON)
let someWater = measure(Ingredients.water, 2.25 * CUP)
let someSugar = measure(Ingredients.sugar, 0.5 * TEASPOON)

console.log("I have " + someYeast.description)
console.log("I have " + someWater.description)
console.log("I have " + someSugar.description)

