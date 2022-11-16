function solution(cipher, code) {
    var answer = '';
    const cipherArr = cipher.split('');
    for(i in cipherArr){
        if((parseInt(i)+1)%code==0){
           answer+=cipherArr[i]
        }
    }
    return answer;
}