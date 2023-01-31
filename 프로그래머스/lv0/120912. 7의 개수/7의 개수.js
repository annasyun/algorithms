function solution(array) {
    var answer = 0;
    let ansArr = [];
    array.map((index)=>{
        ansArr.push(...index.toString().split(''));
    })
    ansArr.forEach((index)=>{
        index.includes('7')?answer++:answer+=0;
    })
    return answer;
}