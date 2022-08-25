"use strict";
class User {
    constructor(username, salary) {
        this.u = username;
        this.s = salary;
        this.mes = () => {
            return `hello ${this.u} this is ur salary ${this.s}`;
        };
    }
    saymess() {
        return `hello ${this.u} this is ur salary ${this.s}`;
    }
}
let username = new User("akram", 3500);
console.log(username);
console.log(username.u);
console.log(username.s);
console.log(username.saymess);
//# sourceMappingURL=classes.js.map