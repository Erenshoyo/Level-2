//? Function -> Arrow and Normal function

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(addNormal(2, 2));

const addArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addArrow(2, 5));

//? Function defined in object -> method!!!

const poorUser = {
  name: "Tauhid",
  balance: 0,
  addBalance(value: number) {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addBalance(100000);

//? Function in loop -> Callback Function

const arr: number[] = [1, 4, 6];

const sqrArray = arr.map((x: number): number => x * x);
