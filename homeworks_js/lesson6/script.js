
function createNewUser() {
    let firstName = prompt("Input your name", "");
    let lastName = prompt("Input your lastName", "");
    this.firstName = firstName;
    this.lastName = lastName;
    var newUser = {
        firstName: this.firstName,
        lastName: this.lastName
    };

   this.getLogin = function () {
        return this.firstName.slice(0, 1).toLowerCase() + this.lastName.toLowerCase();
    };
}

console.log(new createNewUser.getLogin());
