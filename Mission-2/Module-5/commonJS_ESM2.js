const { a: x } = require("./commonJS_ESM");
const { a: y } = require("./commonJS_ESM3");

// const add = require("./utils/add");
// const sub = require("./utils/sub");

const { f1: addition, f2: subtraction } = require("./utils/index");

// console.log("Addition :", add(x, y));

console.log("Addition :", addition(x, y));
console.log("Addition :", subtraction(x, y));
console.log(x, y);
