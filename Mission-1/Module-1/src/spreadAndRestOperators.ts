//? Spread Operator

const friends = ["Badhon", "Atik", "Faique"];

const schoolFriends = ["Abbasi", "Rifat", "Shawon"];

const collegeFriends = ["Hasib", "Faisal", "Ganguli"];

friends.push(...schoolFriends); //! "..." before the array is the spread operator.
friends.push(...collegeFriends); //! "..." before the array is the spread operator.

console.log(friends);

//? Spread operator in objects

const user = {
  name: "Tauhid",
  phoneNo: "01900000000",
};

const otherInfo = {
  hobby: "outing",
  favouriteColor: "Black",
};

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

//? Rest operator.

//! Not a handy approach with a lots of limitations.
// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Sent Invitation to ${friend3}`);
//   console.log(`Sent Invitation to ${friend2}`);
//   console.log(`Sent Invitation to ${friend1}`);
// };

// sendInvite("Avinno", "Nabil", "Ishmam");

// * Using "Rest" operator
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Send invitation to ${friend}`);
  });
};

sendInvite("Avinno", "Nabil", "Ishmam");
