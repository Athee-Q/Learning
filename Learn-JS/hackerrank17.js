function basketBallscores(arr){
    let minscore = arr[0];
    let maxscore = arr[0];
    let mincount = 0;
    let maxcount = 0;

    for(let i = 1; i < arr.length ; i++){
        if(arr[i] < minscore){
            minscore = arr[i];
            mincount++;
        }else if(arr[i] > maxscore){
            maxscore = arr[i];
            maxcount++;
        }
    }
    return [mincount,maxcount]
}

const scores = [12, 24, 10, 24];
console.log(basketBallscores(scores));