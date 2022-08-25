// interfaces 

// user interface
interface user {
    name : string, 
    age : number,
    country : string,
    sayHello () : string, // method return a string
    getNumber : (num : number) => number // method return a number
}

let user : user = {
    name : "akram",
    age : 25,
    country : "algeria",
    sayHello(){
        return this.name    // return akram in this case
    },
    getNumber(num) {
        return num * this.age   // return the age in this case 25 * number you 'll pase in the param
    }
}

let user1 : user = {
    name : "aymen",
    age : 27,
    country : "algeria",
    sayHello(){
        return this.name
    },
    getNumber(num) {
        return num * this.age
    }
}

console.log(user)
console.log(user.sayHello())
console.log(user.getNumber(2))

console.log(user1)
console.log(user1.sayHello())
console.log(user1.getNumber(2))

// interface reopen and use case

// homepage
interface Setting {
    readonly theme : boolean, // can't change the the value
    font : string
}

// Articles page
interface Setting{
    slider : boolean
}

// contact page
interface Setting {
    external : boolean
}

let userSetting : Setting = {
    theme : true,
    font : 'open sans',
    slider : true,
    external : true
}

console.log(userSetting)