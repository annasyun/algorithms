function solution(i,j,k){
    let result = 0;
    for(i; i<=j; i++){
        let str =  '' + i
        let arr = str.split('')
        let test = arr.filter(v => v.includes(k))
        result += test.length
    }

    return result

}