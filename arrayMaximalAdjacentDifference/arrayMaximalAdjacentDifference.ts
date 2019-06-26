function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    let maxDiff = inputArray[0] - inputArray[1]

    for (let i = 0; i < inputArray.length; i++) {
        const diff = inputArray[i - 1] - inputArray[i]
        maxDiff = diff > maxDiff ? diff : maxDiff
    }
    return maxDiff
}

console.log(arrayMaximalAdjacentDifference([1, 3, 4, 8]))
console.log(arrayMaximalAdjacentDifference([1, 3, 12, 8]))