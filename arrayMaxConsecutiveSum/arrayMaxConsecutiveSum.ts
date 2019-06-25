function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sum = 0
    let max = 0

    for (let i = 0; i < k; i++) {
        sum += inputArray[i]
    }

    max = sum

    for (let i = k; i < inputArray.length; i++) {
        sum -= inputArray[i - k]
        sum += inputArray[i]

        if (sum > max) {
            max = sum
        }
    }
    return max
}

console.log(arrayMaxConsecutiveSum([1, 2, 3, 4, 5], 2)) //Output : 9
console.log(arrayMaxConsecutiveSum([1, 2, 3, 4, 5], 3)) //Output : 12