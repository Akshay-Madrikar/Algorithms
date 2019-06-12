function absoluteValueSumMinization(a: number[]): number {
    const isEven = a.length % 2 === 0;

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValueSumMinization([2, 4, 7]));  //Output = 4
console.log(absoluteValueSumMinization([2, 4, 7, 6, 6])); //Output = 7