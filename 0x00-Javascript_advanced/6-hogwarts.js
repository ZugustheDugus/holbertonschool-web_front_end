class studentHogwarts {
  constructor(privateScore = 0, name = null) {
    this._privateScore = privateScore;
    this.name = name;
  }

  #changeScoreBy(points) {
    this._privateScore += points;
  }

  setName(newName) {
    this.name = newName;
  }

  rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    return `${this.name}: ${this._privateScore}`
  }
}

let Harry = new studentHogwarts();
  Harry.setName('Harry');
  Harry.rewardStudent();
  Harry.rewardStudent();
  Harry.rewardStudent();
  Harry.rewardStudent();

let Draco = new studentHogwarts();
  Draco.setName('Draco');
  Draco.rewardStudent();
  Draco.penalizeStudent();
  Draco.penalizeStudent();
  Draco.penalizeStudent();

console.log(Harry.getScore());
console.log(Draco.getScore());