const materials = require("./material")
const {TEASPOON, TABLESPOON, CUP, QUARTS, OUNCE, CM, INCH, LITER} = require("./units")
const Ingredient = require("./ingredient")
const Bowl = require("./newBowl")
const WorkSurface = require("./newWorkSurface")
const Pan = require("./newPan.js")
const Oven = require("./newOven")
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
mixingBowl.printContents()
mixingBowl.mixContent()
mixingBowl.printContents()
mixingBowl.add(someSalt)
mixingBowl.add(someOil)
mixingBowl.add(someFlour)
mixingBowl.printContents()
mixingBowl.mixContent()
mixingBowl.printContents()

let marbleTop = new WorkSurface(100 * CM, 60 * CM)
marbleTop.printContents()
marbleTop.flour()
marbleTop.add(mixingBowl.removeContent())
marbleTop.kneadContent();
marbleTop.printContents()

let greasedBowl = new Bowl(20 * CUP)
greasedBowl.grease()
greasedBowl.add(marbleTop.removeContent())
greasedBowl.printContents()

greasedBowl.cover()
greasedBowl.punchContent()
greasedBowl.printContents()

marbleTop.add(greasedBowl.removeContent())
marbleTop.divideContent()
marbleTop.shapeContent()
marbleTop.printContents()

let bakingPan1 = new Pan(9 * INCH, 5 * INCH, 15 * CUP)
let bakingPan2 = new Pan(9 * INCH, 5 * INCH, 15 * CUP)
bakingPan1.grease();
bakingPan2.grease()

bakingPan1.add(marbleTop.removeContent())
bakingPan2.add(marbleTop.removeContent())
bakingPan1.cover();
bakingPan2.cover()
bakingPan1.printContents()
bakingPan2.printContents()

let bakingOven = new Oven(10 * LITER);
bakingOven.setTemperature(375)
bakingOven.waitTemperature()

bakingOven.add(bakingPan1)
bakingOven.add(bakingPan2)
bakingOven.printContents()

bakingOven.bake(35)
bakingOven.printContents()

let wireRack = new WorkSurface(100 * CM, 60 * CM)

wireRack.add(bakingOven.removeContent().removeContent())
wireRack.add(bakingOven.removeContent().removeContent())
wireRack.printContents()

