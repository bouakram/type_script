// generics tipes 

function getTipes <GenericType> (val : GenericType) : GenericType {
    return val
}

console.log(getTipes<number>(15))
console.log(getTipes<string>('akram'))
