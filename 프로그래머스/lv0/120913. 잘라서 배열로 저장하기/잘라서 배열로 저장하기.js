function solution(my_str, n) {
    let answer = [];
    const my_str_arr = my_str.split('');
        while(my_str_arr.length!==0){
            answer.push(my_str_arr.splice(0,n).join(''));
        }
    return answer;
}