const sumOfDigits = ( num ) => {
    let sum = 0
    while ( num != 0 ) {
        sum = sum + ( num % 10 )
        num = num / 10
    }
    return sum
}


console.log( sumOfDigits( 215 ) ) //Output = 8