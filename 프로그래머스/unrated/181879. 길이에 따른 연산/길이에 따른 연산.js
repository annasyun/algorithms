function solution(num_list) {

    let answer = 0;
    if(num_list.length>10){
        answer = num_list.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
);
    }else{
        answer = num_list.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
);
    }
    return answer;
}