function solution(num, k) {
    var answer = 0;
    let arr = String(num).split("");
    console.log(arr);
    
    return arr.indexOf(String(k))>=0? arr.indexOf(String(k))+1 : -1;
}
