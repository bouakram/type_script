// start with classes

class User {   
    u : string
    s : number
    mes : ()=> string
    constructor (username : string , salary : number){
        this.u = username
        this.s = salary
        this.mes = () =>{
            return `hello ${this.u} this is ur salary ${this.s}`
        }
    }
    saymess(){
        return `hello ${this.u} this is ur salary ${this.s}`
    }
}

let username = new User("akram" , 3500)

console.log(username)
console.log(username.u)
console.log(username.s)
console.log(username.saymess)