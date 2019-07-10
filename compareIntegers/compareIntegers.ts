function compareIntegers(str1: string, str2: string): string {

    const num1 = parseInt(str1)
    const num2 = parseInt(str2)

    if (num1 === num2) return "Equal"
    else if (num1 < num2) return "Less"
    else return "Greater"
}

console.log(compareIntegers('12', '13'))
console.log(compareIntegers('19', '19'))
console.log(compareIntegers('708', '505'))