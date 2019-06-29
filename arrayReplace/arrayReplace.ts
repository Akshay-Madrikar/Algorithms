function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem
        }
    }
    return inputArray
}

console.log(arrayReplace([1, 3, 1], 1, 5)) //Output : [5, 3, 5]
console.log(arrayReplace([4, 2, 4], 4, 1))