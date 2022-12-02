function solution(num_list) {
    var answer = [];
    let even = 0;
    let odd = 0;
    num_list.forEach(function(element){
        if(element%2===0){
            even++
        }else{
            odd++
        }
    })
    return [even,odd];
}