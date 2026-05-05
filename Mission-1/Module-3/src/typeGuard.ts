//? Type guard / Type narrowing.

//? in and typeof

const add = (num1: number | string, num2: number | string) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
};

//? in type guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This ${user.name} and his role is: ${user.role}`);
  } else {
    console.log(`${user.name}`);
  }
};

getUserInfo({ name: "NormalUser" });
getUserInfo({ name: "NormalUser", role: "Admin" });
