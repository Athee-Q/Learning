function timeConversion(times){

    let time = times.substr(0,8)
    let period = times.substr(-2)
    let [hours,minutes,seconds] = time.split(':');

    let militaryHours = Number(hours);

    if(period === 'PM' && militaryHours < 12){
        militaryHours += 12 ;
    }
    else if(period === 'AM' && militaryHours === 12){
        militaryHours = 0
    }

    let militaryTime = `${String(militaryHours).padStart(2,0)}:${minutes}:${seconds} `
    
    return militaryTime
 }

console.log(timeConversion('11:22:33PM'))
console.log(timeConversion('12:22:11AM'))