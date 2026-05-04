//? enum -> keeps a set of fixed string literals defiend in a single place.
//! We cannot use type as a value. EX-> if(UserRoles) is not valid.
var canEdit1 = function (role) {
    if (role === "Admin" || role === "Editor")
        return true;
    else
        return false;
};
var isEditPermissable1 = canEdit1("Admin");
console.log(isEditPermissable1);
//! We can use enums both as value and type.
//! Senior developers doesn't recommen
var UserRolesEnum;
(function (UserRolesEnum) {
    UserRolesEnum["Admin"] = "Admin";
    UserRolesEnum["Editor"] = "Editor";
    UserRolesEnum["Viewer"] = "Viewer";
})(UserRolesEnum || (UserRolesEnum = {}));
var canEdit = function (role) {
    if (role === UserRolesEnum.Admin || role === UserRolesEnum.Editor)
        return true;
    else
        return false;
};
var isEditPermissable = canEdit(UserRolesEnum.Admin);
console.log(isEditPermissable);
