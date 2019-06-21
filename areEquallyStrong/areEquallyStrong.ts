function areEquallyStorng(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight

    return yourWeakest === friendsWeakest && yourStrongest === friendsStrongest
}

console.log(areEquallyStorng(15, 10, 15, 10)) //Output : true
console.log(areEquallyStorng(10, 15, 15, 9)) //Output : false