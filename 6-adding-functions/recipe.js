const TEASPOON = 5 // mL
const TABLESPOON = 15 // mL
const CUP = 250 // mL
const QUART = 946 // mL

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

function getBowl(size) {
  console.info("Finding a bowl of size " + size + "mL")
  let bowl = {
    capacity: size,
    description: "bowl of size " + size + "mL"
  }
  return bowl
}

function addToBowl(bowl, someStuff) {
  console.info("Adding " + someStuff.description + " to " + bowl.description)
}

// Do the recipe!
console.clear()
console.log("Let us begin!")

let someYeast = measure(Ingredients.yeast, 1 * TEASPOON)
let someWater = measure(Ingredients.water, 2.25 * CUP)
let someSugar = measure(Ingredients.sugar, 0.5 * TEASPOON)

let desiredBowlSize = 4.5 * QUART
let mixingBowl = getBowl(desiredBowlSize)

addToBowl(mixingBowl, someYeast)
addToBowl(mixingBowl, someWater)
addToBowl(mixingBowl, someSugar)

