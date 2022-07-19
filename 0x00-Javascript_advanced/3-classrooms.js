const createClassRoom = (numbersOfStudents) => {
  const studentSeat = (seat) => {
    return () => seat;
  }
  let students = [];
  for (let i = 0; i < numbersOfStudents; i++) {
    students[i] = studentSeat(i + 1);
  }
  return students;
}

const classRoom = createClassRoom(10);