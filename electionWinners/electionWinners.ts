function electionWinners(votes: number[], k: number): number {
    let result = 0
    const maxVotes = Math.max(...votes)
    const sortedVotes = votes.sort((a, b) => b - a)

    if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
        return 1
    }

    votes.forEach((vote) => {
        if (maxVotes - vote < k) {
            result++
        }
    })

    return result
}

console.log(electionWinners([2, 3, 5, 2], 3))