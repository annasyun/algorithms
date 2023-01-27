function solution(my_string) {
    var answer = 0;
    const stringArr = my_string.split('');
    let ansArr = [];
    console.log(stringArr);
    for(let i=0;i<stringArr.length;i++){
      if(isNaN(stringArr[i])==true){
          ansArr.push(isNaN(stringArr[i]));
      }else{
          ansArr.push(stringArr[i]);
      }
    }
    console.log(ansArr);
    const ansArrJoin = ansArr.join('');
    console.log(ansArrJoin);
    let ans = ansArrJoin.split(true);
    console.log(ans);

    for(let i=0;i<ans.length;i++){
        if(ans[i]!==''){
            answer+=Number(ans[i]);
            console.log(answer);
        }
    }
    return answer;
}