

const addBorder = ( picture ) => {
    picture.unshift( '****' )
    picture.push( '****' )

    for ( let i = 1; i < picture.length - 1; i++ ) {
        picture[ i ] = '*'.concat( picture[ i ], '*' )
    }
    return picture
}


console.log( addBorder( [ 'abc', 'ded' ] ) )