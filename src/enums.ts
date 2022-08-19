enum easys {
    one = 20,
    two = 15,
    three = 10
}
enum levls {
    easy = easys.one,
    medume = 5,
    hard = 2
}

const lvl : string = "easy"

if (lvl == "easy"){
    console.log(`level is ${lvl} and you have ${levls.easy} secounds`)
}