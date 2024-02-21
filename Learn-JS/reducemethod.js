function arr (ar){
    return ar.reduce((accumulator , currentval)=>{
        return accumulator + currentval
    })
}
let ar = [12 ,23,34,56,64]
console.log(arr(ar))