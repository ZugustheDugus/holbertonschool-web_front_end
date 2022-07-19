let roomDimensions = {
  width: 50,
  length: 100,
  getArea: (width, length) => width * length
}

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);
console.log(boundGetArea(8, 4));