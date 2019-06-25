function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sum = 0
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i] + inputArray[i + 1]
        sum += inputArray[i]
    }

    return sum
}

console.log(arrayMaxConsecutiveSum([1, 2, 3, 4, 5], 2))