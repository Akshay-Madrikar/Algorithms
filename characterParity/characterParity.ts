function characterParity(inputCharacter: any): string {


    if (isNaN(inputCharacter)) {
        return 'Not a digit'
    } else if ((inputCharacter % 2 === 0)) {
        return 'even'
    } else {
        return 'odd'
    }

}

console.log(characterParity('8'))
console.log(characterParity('100F'))