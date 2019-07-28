function depositProfit(deposit: number, rate: number, threshold: number): number {

    let year = 0

    while (threshold > deposit) {
        deposit = deposit + (deposit * rate / 100)
        year++
    }
    return year
}

console.log(depositProfit(100, 20, 170))
console.log(depositProfit(100, 20, 200))