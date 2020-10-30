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



