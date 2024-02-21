function cake(n){
    let longCandle = Math.max(...n)
    let totalCandle = n.filter(m => m===longCandle)
    return totalCandle.length
    
    }
    
    let candles = [1,5,8,8,7]
    console.log(staircase(candles))
    