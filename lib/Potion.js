// whatever is passed into function gets set as name
function Potion(name) {
  this.types = ["strength", "agility", "health"];
  //checks if a name was input when calling function; if it wasn't, pulls random
  this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

  // if the object is a health potion, value between 30 & 40 else give a random value between 7 & 12
  if (this.name === "health") {
    this.value = Math.floor(Math.random() * 10 + 30);
  } else {
    this.value = Math.floor(Math.random() * 5 + 7);
  }
}

module.exports = Potion;
