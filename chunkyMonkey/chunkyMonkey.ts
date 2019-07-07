function chunkyMonkey(inputArray: any[], size: number): any[][] {

    let newArray = []
    let count = 0

    while (count < inputArray.length) {
        newArray.push(inputArray.slice(count, count += size))
    }
    return newArray

}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2)) //Output [ [ 'a', 'b' ],[ 'c', 'd' ] ]
console.log(chunkyMonkey([1, 2, 3, 4, 5], 3)) //Output [ [ 1, 2, 3 ],[ 4, 5 ] ]