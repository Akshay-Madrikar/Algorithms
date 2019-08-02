function differentSymbolsNaive(inputString: String): number {
    let uniqueCharacter: string[] = []
    const alphabets: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let s1 = inputString.split('')
    if (alphabets.includes(s1)) {


    }
    return s1
}

console.log(differentSymbolsNaive('cabca'))
console.log(differentSymbolsNaive('abcd'))