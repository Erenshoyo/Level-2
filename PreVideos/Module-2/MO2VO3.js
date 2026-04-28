//! Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

const sortedNumber = numbers.sort((a, b) => a - b);

fruits.sort((a, b) => a.localeCompare(b)); // Sorts alphabetically, not upper/lowercase sensitive.

console.log(numbers); // The sort operation also sort's the main array.
console.log(sortedNumber);
console.log(fruits);

//! Nested array flat

const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
const flatArr =
  arr.flat(
    Infinity,
  ); /*need to mention layer inside flat(layer) if there is multiple nested array. 
                              If only one nested array is present, no need to mention the layer inside flat(layer).
                              In case, there is a lot of nesting and we don't know how many nested array are there,
                                       we can use "Infinity" inside flat. flat(Infinity)*/
console.log(flatArr);

const tagsFromPosts = [
  ["JavaScript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filteredTags = new Set(tagsFromPosts.flat());
console.log(filteredTags);

//! Some

const numbers2 = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers2.some((number2) => number2 % 2 === 0);

console.log(hasEvenNumber);

const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role),
);

console.log(canAccess);

//! Array.from()

const arr2 = Array.from({ length: 5 }).fill(
  "",
); /* Creating an array out of thin air
 * Used in making pagination
 *  */

const arr3 = Array.from(
  { length: 5 },
  (_, i) => i,
); /** "(_, i) => i" this part uses the indexes as the element of the array. example: here the output is [0, 1, 2, 3, 4]*/

const arr4 = Array.from([1, 2, 3], (value, i) => value * value);

console.log(arr2);
console.log(arr3);
console.log(arr4);

// * Useful function to create pagination
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );

console.log(range(1, 11, 1));
