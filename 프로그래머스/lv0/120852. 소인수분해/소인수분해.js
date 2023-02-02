function solution(n) {
    const smallNumber = []
    let result = 2
    while(n !== 1) {
        if(n%result === 0) {
            smallNumber.push(result)
            n/=result
            result = 2
        } else {
            result += 1
        }
    }
    return Array.from(new Set(smallNumber))
}