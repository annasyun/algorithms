function solution(s) {
    const ansArr=[];
    const sArr=s.split('').sort();
    
    for(let i=0;i<sArr.length;i++){
            let count = 0;
        for(let j=0;j<sArr.length;j++){
         if (sArr[i]==sArr[j]){
             count++
         }
            
        }
        if(count==1){
            ansArr.push(sArr[i]);
        }
    }
    return ansArr.join('');
}