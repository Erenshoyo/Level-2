//? Destructuring -> Object destructuring and Array destructuring

//? Object Destructuring

const user = {
  id: 1,
  name: {
    firstName: "Asif",
    MiddleName: "Shahriar",
    lastName: "Tauhid",
  },
  gender: "male",
  favouriteColor: "olive green",
};

//! Code becomes too wordy and verbose, difficult to handle in bigger projects.
// const myFavouriteColor = user.favouriteColor;
// const middleName = user.name.MiddleName;

//* Using destructuring we can keep the code readable, clean and easier to maintain
const {
  favouriteColor: myFavouriteColor,
  name: { MiddleName: myMiddleName }, //! Here we went a level deeper as name is a nested object
} = user; //! Name alias -> "objectPropety: PropertyName", here "PropertyName" is flexible, any name can be used.
console.log(myFavouriteColor);
console.log(myMiddleName);

//? Array Destructuring

const friends = ["badhon", "atik", "faique", "avinno"];

const uniFriend = friends[3];

const [A, B, schoolFriend, C] = friends;
console.log(uniFriend);
console.log(schoolFriend);
