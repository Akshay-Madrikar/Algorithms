function arrayConversion(arr: number[]): number {
    let isOdd = true

    while (arr.length !== 1) {
        arr = sumProduct(arr, isOdd)
        isOdd = !isOdd
    }
    return arr[0]
}

function sumProduct(numbers: number[], isOdd: boolean): number[] {

    const sumProducts: number[] = []

    if (isOdd) {
        for (let i = 0; i < numbers.length; i += 2) {
            sumProducts.push(numbers[i] + numbers[i + 1])
        }
    } else {
        for (let i = 0; i < numbers.length; i += 2) {
            sumProducts.push(numbers[i] * numbers[i + 1])
        }
    }
    return sumProducts
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])) //Output : 186
console.log(arrayConversion([1, 4, 6, 8])) //Output : 70


