// generics tipes 

function getTipes <GenericType> (val : GenericType) : GenericType {
    return val
}

console.log(getTipes<number>(15)) // number tipe
console.log(getTipes<string>('akram')) // string tipe
console.log(getTipes<number[]>([1,2,3,4])) // array type

// generic multiple types
function getTipess <GenericType ,GenericType1 > (val : GenericType , val1 : GenericType1) : string {
    return `${val} and ${val1}`
}

console.log(getTipess<string , number>("akram" , 24))