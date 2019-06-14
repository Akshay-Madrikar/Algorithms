const adjacentElementsProduct = ( num ) => {

    let largeProduct = num[ 0 ] * num[ 1 ]

    for ( let i = 1; i < num.length - 1; i++ ) {
        const product = num[ i ] * num[ i + 1 ]
        largeProduct = largeProduct < product ? product : largeProduct
    }

    return largeProduct

}



console.log( adjacentElementsProduct( [ 3, 6, , -5, 7, ] ) )