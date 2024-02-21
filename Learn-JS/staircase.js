function staircase(n){
    for(let i = 1 ; i <= n ; i++){
        let space = ' '.repeat(n-i);
        let hash = '#'.repeat(i);
        console.log(space + hash);
    }
}

// for(let i = 1 ; i <= n ; i++){
//     let space = '';
//     let hash = '';
    
// for(let j = 0 ; j < n-i ; j++){
//     space += ' '
// }
// for(let k = 0 ; k < i ; k++){
//     hash += '#'
// }
// console.log( space + hash )
// }
// }

staircase(4)