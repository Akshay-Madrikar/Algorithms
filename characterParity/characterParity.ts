function characterParity(inputCharacter: string): string {

    const character = parseInt(inputCharacter)

    if (isNaN(character)) {
        return 'Not a digit'
    } else if ((character % 2 === 0)) {
        return 'even'
    } else {
        return 'odd'
    }

}

console.log(characterParity('8')) //Output : even
console.log(characterParity('100F')) //Output : Not a digit