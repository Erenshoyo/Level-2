//? as const assertion

// enum UserRolesEnum {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

//* as const Assertion
const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const; //! to make it not changable. 

//UserRoles.Admin = "Reader"; //* This doesn't take a new value, which was expected

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) return true;
  else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
