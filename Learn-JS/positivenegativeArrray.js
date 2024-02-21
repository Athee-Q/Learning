function plusMinus(arr){
    const totalElement = arr.length ;
    let positiveElement = 0 ;
    let negativeElement = 0 ;
    let zeroElement = 0 ;
    
    arr.forEach(num => {
        if(num > 0){
          positiveElement++;   
        } 
        else if(num < 0) {
          negativeElement++;
        } 
        else {
            zeroElement++ ;
        }    
    });
    
    const positiveRatio = positiveElement / totalElement;
    const negativeRatio = negativeElement / totalElement;
    const zeroRatio = zeroElement / totalElement;
    
    console.log(positiveRatio.toFixed(6))
    console.log(negativeRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6))
}
const arr = [1, -2, 0, 3, -4, 5];
plusMinus(arr);