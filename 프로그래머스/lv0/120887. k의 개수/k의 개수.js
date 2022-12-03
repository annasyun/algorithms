function solution(i,j,k){
    let result = '';
    for(i; i<=j; i++){
        result += String(i)
    }
    return result.split(k).length-1
}

console.log(solution(1,13,1))
console.log(solution(10,50,5))
console.log(solution(3,10,2))