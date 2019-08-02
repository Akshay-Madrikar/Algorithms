function differentSymbolsNaive(inputString: String): number {
    let uniqueCharacter: string[] = []

    let inputChars: string[] = inputString.split('')

    inputChars.forEach((char) => {
        if (!uniqueCharacter.includes(char)) {
            uniqueCharacter.push(char)
        }
    })
    return uniqueCharacter.length
}

console.log(differentSymbolsNaive('cabca'))
console.log(differentSymbolsNaive('abcd'))