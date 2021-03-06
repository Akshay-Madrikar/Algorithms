function centuryFromYear(inputYear: number): number {

    const century = inputYear / 100

    if (inputYear % 100 === 0) {
        return century
    }
    return Math.floor(century) + 1
}

console.log(centuryFromYear(2000)) //Output : 20
console.log(centuryFromYear(2019)) //Output : 21