function solution(s) {
    let sum = 0;
    const s_arr = s.split(' ');
    
    for(let i = 0;i<s_arr.length;i++){
        
        if(s_arr[i]=='Z'){
            sum-=Number(s_arr[i-1])
        }else{
            sum+=Number(s_arr[i]);
        }
    }
    return sum;
}