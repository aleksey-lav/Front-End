function createNewUser() {
    let user = {};
    Object.defineProperty(user, 'firstName', {
        configurable: true,
        writable: false
    });
    Object.defineProperty(user, 'lastName', {
        configurable: true,
        writable: false
    });
    user.setFirstName = function () {
        let firstName = prompt("input FirstName", "");
        Object.defineProperty(user, "firstName", {
            value: firstName
        });
    };
    user.setLastName = function () {

        let lastName = prompt("input lastName", "");
        Object.defineProperty(user, "lastName", {value: lastName});
    };
    user.getLogin = function () {
        return this.firstName.slice(0, 1).toLowerCase() + this.lastName.toLowerCase();
    };
    user.setFirstName();
    user.setLastName();
    return user;
}
let newUser = createNewUser();
console.log(newUser);
console.log(newUser.getLogin());
















