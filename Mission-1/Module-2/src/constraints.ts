//? Constraints -> To enforce some rules/strict rules

//! This function has a massive flaw. There is no strict rules to identify a specific student (Ex: student3),
//! if they have no identifier like name or id.
//* In this situation we can use contraint to enforce that some identifiers must be included.

type Student = { id: number; name: string };

//* Using constrait-> using "extends" keyword
const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 1,
  name: "Raika",
  hasPen: true,
};

const student2 = {
  id: 2,
  name: "Hossain",
  hasCar: true,
  isMarried: false,
};

// const student3 = { //! Here we are missing the required identifiers.
//   hasWatch: true,
// };

const student3 = {
  id: 89,
  name: "Tuba",
  hasWatch: true,
};

//const result = addStudentToCourse(student3); //! Now we see that it's asking us for id and name.
const result = addStudentToCourse(student3);
