const materials = require("./material")
const {TEASPOON, TABLESPOON, CUP, QUARTS, OUNCE, CM, INCH} = require("./units")
const Ingredient = require("./ingredient")
const Bowl = require("./newBowl")
const WorkSurface = require("./newWorkSurface")
const Pan = require("./newPan.js")
// const Ingredient = require("./ingredient")
// const { volumeUnit, weightUnit } = require("./units")

console.clear()

// Ingredients
// 1 package (1/4 ounce) active dry yeast
// 2-1/4 cups warm water (110° to 115°)
// 3 tablespoons sugar plus 1/2 teaspoon sugar
// 1 tablespoon salt
// 2 tablespoons canola oil
// 6-1/4 to 6-3/4 cups bread flour

let someYeast = new Ingredient(materials.Yeast, 0.25 * OUNCE)
let someWater = new Ingredient(materials.Water, 2.25 * CUP )
let someSugar = new Ingredient(materials.Sugar, 0.25 * TEASPOON)
let someSalt = new Ingredient(materials.Salt, 1 * TABLESPOON)
let someOil = new Ingredient(materials.Oil, 2 * TABLESPOON)
let someFlour = new Ingredient(materials.Flour, 6.5 * CUP)

let mixingBowl = new Bowl(12 * CUP);
mixingBowl.add(someYeast)
mixingBowl.add(someWater)
mixingBowl.add(someSugar)

mixingBowl.mixContent()
console.log(mixingBowl)

mixingBowl.add(someSalt)
mixingBowl.add(someOil)
mixingBowl.add(someFlour)
console.log(mixingBowl)

mixingBowl.mixContent()
console.log(mixingBowl)

let marbleTop = new WorkSurface(100 * CM, 60 * CM)
console.log(marbleTop)
marbleTop.add(mixingBowl.removeContent())

marbleTop.flour()
marbleTop.kneadContent();
console.log(marbleTop)

let greasedBowl = new Bowl(20 * CUP)
greasedBowl.grease()
greasedBowl.add(marbleTop.removeContent())
console.log(greasedBowl)

greasedBowl.cover()
console.log(greasedBowl)
greasedBowl.punchContent()

marbleTop.add(greasedBowl.removeContent())
console.log(marbleTop)

marbleTop.divideContent()
console.log(marbleTop)

marbleTop.shapeContent()
console.log(marbleTop)

let bakingPan1 = new Pan(9 * INCH, 5 * INCH, 15 * CUP)
let bakingPan2 = new Pan(9 * INCH, 5 * INCH, 15 * CUP)
bakingPan1.grease();
bakingPan2.grease()
console.log(bakingPan1)

bakingPan1.add(marbleTop.removeContent())
bakingPan2.add(marbleTop.removeContent())
console.log(bakingPan1)
console.log(bakingPan2)
console.log(marbleTop)

bakingPan1.cover();
bakingPan2.cover()
console.log(bakingPan1)
console.log(bakingPan2)



