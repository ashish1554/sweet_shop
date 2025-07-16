
class SweetService {
  constructor() {
    this.sweets = [];
  }

addSweet(sweet) {
  const exists = this.sweets.find(s => s.id === sweet.id);
  if (exists) {
    throw new Error("Sweet ID must be unique");
  }
  this.sweets.push(sweet);
}

  getAllSweets() {
    return this.sweets;
  }
}

module.exports = SweetService;
