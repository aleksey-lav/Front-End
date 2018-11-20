module.exports = class User {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName} ${this.id}`
    }
};