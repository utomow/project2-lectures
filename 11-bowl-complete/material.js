module.exports = {
  Yeast: {
    name: "Yeast",
    density: 1.1126,
    description: "Granulated Yeast",
    form: "solid"
  },
  Water: {
    name: "Water",
    density: 1,
    description: "Plain Water",
    form: "fluid"
  },
  Sugar: {
    name: "Sugar",
    density: 1.59,
    description: "Granulated Sugar",
    form: "solid"
  },
  Oil: {
    name: "Oil",
    density: 0.92,
    description: "Canola oil",
    form: "fluid"
  },
  Flour: {
    name: "Flour",
    density: 0.593,
    description: "Bread flour",
    form: "solid"
  },
  Grease: {
    name: "Grease",
    density: 0.9,
    description: "Vegetable base grease",
    form: "solid"
  },
  Salt: {
    name: "Salt",
    density: 2.165,
    description: "Sea Salt",
    form: "solid"
  }
}

/*
class Material {
  constructor(name) {
    this.name = name;
    getProperties();
  }

  materialProperties.forEach(material => {
    if (material.name === this.name) {
      this.density = material.density;
      this.description === material.description;
    }
  })
  },

    materialProperties : [
      { name: "Yeast", density: 1.12, description: "Granulated yeast" },
      { name: "Water", density: 1, description: "Water" },
      { name: "Sugar", density: 1.2, description: "Granulated Sugar" },
      { name: "Oil", density: 0.9, description: "Vegetable oil" },
      { name: "Flour", density: 1.18, description: "Wheat flour" },
      { name: "Grease", density: 0.95, description: "Vegetable base grease"},
      { name: "Salt", density: 1.1, description: "Sea Salt"}
    ],
    
    materials : {
      Yeast: "Yeast",
      Water: "Water",
      Sugar: "Sugar",
      Oil: "Oil",
      Flour: "Flour",
      Grease: "Grease",
      Salt: "Salt"
    }
  // }
}



*/