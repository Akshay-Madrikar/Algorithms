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

console.log(alternatingSums([50, 60, 70, 30])) //Output : [ 120, 90 ]
console.log(alternatingSums([100, 50, 70, 20, 80])) //Output : [ 250, 70 ]