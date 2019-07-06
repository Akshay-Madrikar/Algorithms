function checkPalindrome(inputString: string): boolean {

    let lowercaseString = inputString.toLowerCase()
    let revString = lowercaseString.split('').reverse().join('')

    return inputString === revString ? true : false
}

console.log(checkPalindrome('aabaa')) //Output : true
console.log(checkPalindrome('abac')) //Output : false
console.log(checkPalindrome('a')) //Output : true

