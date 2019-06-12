function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function add2(...numbers) {
    let total = 0;

    numbers.forEach((num) => {
        total += num;
    })

    return total;
}

console.log(add(2, 4)); //Output = 6
console.log(add2(2, 5, 9, 12)); //Output = 28