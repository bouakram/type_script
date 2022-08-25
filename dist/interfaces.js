"use strict";
let user = {
    name: "akram",
    age: 25,
    country: "algeria",
    sayHello() {
        return this.name;
    },
    getNumber(num) {
        return num * this.age;
    }
};
let user1 = {
    name: "aymen",
    age: 27,
    country: "algeria",
    sayHello() {
        return this.name;
    },
    getNumber(num) {
        return num * this.age;
    }
};
console.log(user);
console.log(user.sayHello());
console.log(user.getNumber(2));
console.log(user1);
console.log(user1.sayHello());
console.log(user1.getNumber(2));
let userSetting = {
    theme: true,
    font: 'open sans',
    slider: true,
    external: true
};
console.log(` the user name is : ${user.name} , and u  userSetting.theme , userSetting.font ,`);
//# sourceMappingURL=interfaces.js.map