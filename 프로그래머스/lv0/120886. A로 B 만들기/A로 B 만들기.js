function solution(before, after) {
    let before1 = before.split('')
    let after1=after.split('')
    
    return before1.sort().join('')===after1.sort().join('')?1:0
    
    
}