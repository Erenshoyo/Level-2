//? Union ( | ) and Intersection ( & )

type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
  if (role === "admin") return "Admin Dashboard";
  else if (role === "user") return "User Dashboard";
  else return "Guest Dashboard";
};

console.log(getDashboard("user"));

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const AsifTauhid: EmployeeManager = {
  id: "241****042",
  name: "Asif Shahriar Tauhid",
  phoneNo: "01900000000",
  designation: "Manager",
  teamSize: 10,
};

console.log(AsifTauhid);
