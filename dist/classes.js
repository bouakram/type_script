"use strict";
class User {
    constructor(_username, salary) {
        this._username = _username;
        this.salar = salary;
        this.message = () => {
            return `hello ${this.username} this is ur salary ${this.salar}`;
        };
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    saymess() {
        return `hello ${this.username} this is ur salary ${this.salar}`;
    }
}
let username = new User("akram", 3500);
console.log(username.username);
username.username = "kerou";
console.log(username.username);
console.log(username.salar, "$");
console.log(username.saymess);
class food {
    constructor(title) {
        this.title = title;
        this.title = title;
    }
}
class pizza extends food {
    constructor(title) {
        super(title);
    }
    getTimeCkooking() {
        console.log(`pizza is ckooking`);
    }
}
class sandwich extends food {
    constructor(title) {
        super(title);
    }
    getTimeCkooking() {
        console.log(`sandwich is ckooking`);
    }
}
let piz = new pizza("pizza");
let sand = new sandwich("sandwich");
console.log(piz.getTimeCkooking());
console.log(sand.getTimeCkooking());
//# sourceMappingURL=classes.js.map