// start with classes

class User {
    public get username(): string {
        return this._username
    }
    public set username(value: string) {
        this._username = value
    }   

    salar : number
    message : ()=> string
    constructor (private _username: string , salary : number){
        this.salar = salary
        this.message = () =>{
            return `hello ${this.username} this is ur salary ${this.salar}`
        }
    }
    saymess(){
        return `hello ${this.username} this is ur salary ${this.salar}`
    }

    // get and set accessors

    // get getname () : string {
    //     return this.username
    // }

    // set setname (value : string){
    //     this.username = value
    // }
}

let username = new User("akram" , 3500)

console.log(username.username)
username.username = "kerou"
console.log(username.username)
console.log(username.salar,"$")
console.log(username.saymess)


// class with interfaces

interface Setting {
    themes: boolean,
    fnt: string,
    save(): void
}

// class PageOne implements Setting {
//     constructor (public username : string , public themes : boolean , public fnt : string){}
//     save(): void {
//         console.log("saved")
//     }
// }

// abstract classe

abstract class food {
    constructor(public title : string){
        this.title = title
    }
    abstract getTimeCkooking() : void
}

class pizza extends food {
    constructor(title : string){
        super(title)
    }
    getTimeCkooking(): void {
        console.log(`pizza is ckooking`)
    }
}
class sandwich extends food {
    constructor(title : string){
        super(title)
    }
    getTimeCkooking(): void {
        console.log(`sandwich is ckooking`)
    }
}


let piz = new pizza("pizza")
let sand = new sandwich("sandwich")

console.log(piz.getTimeCkooking())
console.log(sand.getTimeCkooking())