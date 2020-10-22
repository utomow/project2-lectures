const TEASPOON = 5 // mL

const Ingredients = {
    yeast: "yeast",
    sugar: "sugar",
    salt: "salt",
}

function measure(stuff, amount) {
  console.info('Measuring ' + amount + 'mL of ' + stuff )
  return {
      ingredient: stuff,
      amount: amount,
      description: amount + "mL of " + stuff
  }
}


// Do the recipe!
console.log("Let us begin!")

let someSalt = measure(Ingredients.salt, 1.5 * TEASPOON)

console.log("I have " + someSalt.description)
