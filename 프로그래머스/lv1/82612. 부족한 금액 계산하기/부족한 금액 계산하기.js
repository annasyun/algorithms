function solution(price, money, count) {
    let sum = 0;
    let answer = 0;
    for(let i=1;i<=count;i++){
        sum += price * i
    }
    if(sum<=money){
        answer = 0;
    }else{
    answer = parseInt(sum-money);
    }
    return answer;
}