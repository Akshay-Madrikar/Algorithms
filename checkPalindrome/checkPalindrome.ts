function checkPalindrome(inputString: string): boolean {

    let lowercaseString = inputString.toLowerCase()
    let revString = lowercaseString.split('').reverse().join('')

    return inputString === revString ? true : false
}

console.log(checkPalindrome('aabaa'))
console.log(checkPalindrome('abac'))
console.log(checkPalindrome('a'))

