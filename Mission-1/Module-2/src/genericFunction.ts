//? Generic Function

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithBoolean = (value: boolean) => [value];

const createArrayWithUserObject = (value: { id: number; name: string }) => {
  return [value];
};

const arrayString = createArrayWithString("Asif Shahriar Tauhid");
const arrayNumber = createArrayWithNumber(861);
const arrayObject = createArrayWithUserObject({
  id: 123,
  name: "NZXT Casing",
});

const createArrayWithGeneric = <T>(value: T) => [value];

const arrayString2 = createArrayWithGeneric("Asif Shahriar Tauhid");
const arrayNumber2 = createArrayWithGeneric(861);
const arrayObject2 = createArrayWithGeneric({
  id: 123,
  name: "NZXT Casing",
});

//? Tuple

const createArrayWithTuple = <X, Y>(param1: X, param2: Y) => [param1, param2];

const res1 = createArrayWithTuple("Asif", false);
const res2 = createArrayWithTuple(58, {
  name: "Tuba",
});

const addStudentToCourse = <T>(studentInfo: T) => {
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

const result = addStudentToCourse(student1);
console.log(result);
const result2 = addStudentToCourse(student2);
console.log(result2);
