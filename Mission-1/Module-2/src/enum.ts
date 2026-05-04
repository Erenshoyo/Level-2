//? enum -> keeps a set of fixed string literals defiend in a single place.

type UserRoles = "Admin" | "Editor" | "Viewer";

//! We cannot use type as a value. EX-> if(UserRoles) is not valid.
const canEdit1 = (role: UserRoles) => {
  if (role === "Admin" || role === "Editor") return true;
  else return false;
};

const isEditPermissable1 = canEdit1("Admin");
console.log(isEditPermissable1);

//! We can use enums both as value and type.
//! Senior developers doesn't recommend the use of enum
enum UserRolesEnum {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRolesEnum) => {
  if (role === UserRolesEnum.Admin || role === UserRolesEnum.Editor)
    return true;
  else return false;
};

const isEditPermissable = canEdit(UserRolesEnum.Admin);
console.log(isEditPermissable);
