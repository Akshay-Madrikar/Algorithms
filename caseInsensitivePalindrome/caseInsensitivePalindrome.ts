function caseInsensitivePalindrome(inputString: string): boolean {

    let ogLowerCase = inputString.toLowerCase()
    let reverseString = ogLowerCase.split('').reverse().join('')

    return ogLowerCase === reverseString

}

console.log(caseInsensitivePalindrome('AaBaa')) //Output : true
console.log(caseInsensitivePalindrome('JavaScript')) //Output : false