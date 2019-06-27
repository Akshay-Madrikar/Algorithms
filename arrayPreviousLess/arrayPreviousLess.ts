function arrayPreviousLess(inputArray: number[]): number[] {

    let lessThanArray: number[] = []
    for (let i = inputArray.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (inputArray[i] > inputArray[j]) {
                lessThanArray.unshift(inputArray[j])
                break
            } else if (j === 0) {
                lessThanArray.unshift(-1)
            }
        }
    }

    return lessThanArray
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5])) //Output : [-1, 3,- 1, 2, 4]
console.log(arrayPreviousLess([2, 1, 5, 7, 8])) //output : [-1, -1, 1, 5, 7]