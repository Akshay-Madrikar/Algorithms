function confirmEnding(str: string, subStr: string): boolean {

    let len = str.length - subStr.length
    return str.substr(len) === subStr
}

console.log(confirmEnding('Abstraction', 'action'))
console.log(confirmEnding("Open sesame", "pen"))