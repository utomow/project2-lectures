const {TEASPOON, TABLESPOON, CUP, QUARTS} = require("./units")
const materials = require("./material")


class Ingredient {
  constructor(material, amount) {
    // console.log(unit)
    if (material != undefined) {
      this.description = material.description; 
      this.volume = amount;
      this.weight = amount * material.density;
      this.form = material.form;
      this.name = material.name;
    }
  }

/*
  setState(unit) {
    volumeUnit.forEach(volUnit => {
      console.log("the unit in construtor = " + unit)
      if (volUnit.unit === unit) {
        return "liquid"
      } else {
        return "solid"
      }
    })
  }

  isVolumeUnit(unit) {
    console.log(unit)
    volumeUnit.forEach(volUnit => {
      if (volUnit.unit === unit) {
        return true;
      }
      return false;
    })
  }

  normalizeVolume(amount, unit) {
    if (this.isVolumeUnit()) {
      this.volume = amount * this.unit.conversionFactor;
    } else {
      this.volume = (amount * this.unit.conversionFactor) / this.material.density;
    }
  }

  normalizeWeight(amount, init) {
    if (this.isVolumeUnit()) {
      this.weight = amount * this.unit.conversionFactor * this.material.density;
    } else {
      this.weight = amount * this.unit. conversionFactor;
    }
  }


  calculateContentsDensity() {
    return weight/volume
  }
*/

}

module.exports = Ingredient
