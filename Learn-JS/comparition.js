function compareTriplets(a, b) {

    let alice = 0 ;
    let bob = 0 ;

     for (let i = 0 ; i < a.length ; i++){
         if (a[i] > b[i]){
             alice++
         }
          else if (a[i]< b[i]){
             bob++
             }
         }
         return [alice,bob]
    }
    
    let a = [5,3,2]
    let b = [2,3,5]
    console.log(compareTriplets(a,b))
    