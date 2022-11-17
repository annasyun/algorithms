function solution(my_string, num1, num2) {
    let answer = '';
    
    let arr = my_string.split('');
    
    const str1 = arr[num1];
    const str2 = arr[num2];
    
    arr.splice(num1,1,str2);
    arr.splice(num2,1,str1);
    answer = arr.join("");

    return answer;
}
