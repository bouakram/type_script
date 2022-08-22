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

// intersection type

type A = {
    one : string, 
    two : number,
    three : boolean
}

type B = {
    four : number
}

type mix = A & B

function intersection (a : mix){
    console.log(a.one)
    console.log(a.two)
    console.log(a.three)
    console.log(a.four)
}

intersection({one : "string" , two : 24 , three : true , four : 10})

//  type anotation with object

const myObject : {
    "one" : string,
    readonly "two" : number, // can't change the value
    "three" : boolean,
    "four" : {
        "react" : number
    },
} = {
    "one" : "akram",
    "two" : 25,
    "three" : true,
    "four" : {
        "react" : 100
    }
}

myObject.one = "boughazi"

console.log(myObject.one , myObject.two , myObject.three , myObject.four.react)
