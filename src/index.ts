// type Annotations and any data type

let Name:string = "akram"
let age:number = 25

let password:any

password = 4
password = "akram24"

let pages: string | number  // this mean that pages can be string or number

pages = 10 
pages = "ten"

let boys = ['boy1','boy2',14]  // this array can hold all types
let boy:string[] = ['boy1','boy2'] // this array can hold only strings value's

let multiArray: (number |string | string[]) [] = [1,2,4,'q','w',['q','e']] // this multi dimontional array can holde number string and another array can be number or string either

let bool: boolean[] = [true , false] // this array containe boolean value 

function add(n1: number , n2: number){
    return n1 + n2
}

console.log(add(10 , 10))
console.log(typeof add(10 , 10))

// function 
// use the optional param by adding ? after var name
// all optional param came after required param's

function OptionalAndRequired(name : string , age? : number , country? : string){
    return `${name} - ${age} - ${country}`
}

console.log(OptionalAndRequired("akram"))