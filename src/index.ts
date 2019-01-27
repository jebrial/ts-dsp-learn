function mean(x:[number]): number {
    let n = x.length;
    let sum = 0;
    for (let i = 0; i < (n - 1); i++){
        sum += x[i];
    }
    return sum / n;
}

function standardDeviation(mean:number, x:[number]): number {
    let n = x.length - 1;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += (x[i] - mean) ** 2
    }
    return Math.sqrt((sum/n))
}

