function allLongestStrings(inputString: string[]): string[] {
    let longestLength = 0
    const longestWord = []

    inputString.forEach((word) => {
        longestLength = longestLength < word.length ? word.length : longestLength
    })

    inputString.forEach((word) => {
        if (word.length === longestLength) {
            longestWord.push(word)
        }
    })

    return longestWord
}


console.log(allLongestStrings(['akshay', 'abcefg', 'a', 'b', 'bc'])) //Output : [ 'akshay', 'abcefg' ]