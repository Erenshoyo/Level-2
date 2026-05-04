//? Mapped Types

const arrayOfNumber: number[] = [1, 2, 3];
const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((num) =>
  num.toString(),
);

console.log(arrayOfStringUsingMap);

type AreaOfNumber = {
  height: number;
  width: number;
};

type AreaOfString = {
  height: string;
  width: string;
};

type AreaOfStringUsingMap = {
  [key in keyof AreaOfNumber]: string;
};

type AreaOfStringUsingMapWithGeneric<T> = {
  [key in keyof T]: T[key];
};

const area1: AreaOfStringUsingMapWithGeneric<{
  height: string;
  width: number;
}> = {
  height: "50",
  width: 40,
};
