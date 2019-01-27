// 2-1
function mean(x:[number]): number {
    let n = x.length;
    let sum = 0;
    for (let i = 0; i < n; i++){
        sum += x[i];
    }
    return sum / n;
}

// 2-2
function standardDeviation(mean:number, x:[number]): number {
    let n = x.length;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += (x[i] - mean) ** 2
    }
    return Math.sqrt(sum/(n - 1))
}


// 2-3
function standardDeviationRunningStats(x:[number]): number {
    let n = x.length, sumOfSquares = 0, sum = 0;
    for (let i = 0; i < n; i++) {
        sumOfSquares += x[i] ** 2;
        sum += x[i];
    }
    return (sumOfSquares - ((sum ** 2)/n))/ (n-1);
}