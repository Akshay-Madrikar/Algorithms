const compareIntegers = ( str1, str2 ) => {

    return parseInt( str1 ) > parseInt( str2 ) ? 'Greater' : parseInt( str1 ) < parseInt( str2 ) ? 'Less' : 'Equal'
}

console.log( compareIntegers( '12', '13' ) )
console.log( compareIntegers( '19', '19' ) )
console.log( compareIntegers( '708', '505' ) )