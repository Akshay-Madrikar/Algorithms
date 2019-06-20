function alternatingSums(num: number[]): number[] {
    let evenSum = 0
    let oddSum = 0

    num.forEach((element, index) => {
        if (index % 2 == 0) {
            evenSum += element
        } else {
            oddSum += element
        }
    })
    return [evenSum, oddSum]
}

console.log(alternatingSums([50, 60, 70, 30]))
console.log(alternatingSums([100, 60, 70, 30, 80]))