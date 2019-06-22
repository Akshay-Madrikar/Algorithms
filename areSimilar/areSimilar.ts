function areSimilar(arr1: number[], arr2: number[]): boolean {

    const c: number[] = []
    let d: number[] = []

    if (arr1.toString() === arr2.toString()) {
        return true
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            c.push(arr1[i])
            d.push(arr2[i])
        }
    }

    d = d.reverse()

    if (c.length === 2 && (c.toString() === d.toString())) {
        return true
    }

    return false

}

console.log(areSimilar([2, 2, 2], [2, 2, 2])) //Output : true
console.log(areSimilar([2, 3, 2], [3, 2, 2])) //Output : true
console.log(areSimilar([2, 4, 2], [2, 2, 1])) //Output : false