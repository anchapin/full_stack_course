const fs = require("fs");

class Cuisines {
  constructor() {
    this.cuisines = JSON.parse(fs.readFileSync("./app/data/cuisines.json", "utf-8"));
  }

  getAllCuisines() {
    return this.cuisines;
  }

  getCuisineById(id) {
    return this.cuisines.find(cuisine => cuisine.id === parseInt(id)) || null;
  }

  getCuisineByName(name) {
    return this.cuisines.find(cuisine => 
      cuisine.name.toLowerCase() === name.toLowerCase()
    ) || null;
  }
}

module.exports = Cuisines;