// function solution(rsp) {
//  const rspArr = rsp.split('');

//     return (rspArr.map((i)=>{
//     if(i==2){
//         i=0;
//     }else if(i==0){
//         i=5;
//     }else{
//         i=2;
//     }
// })
//                ).join('');
// }

function solution(rsp) {
 const rspArr = rsp.split('');
let answer = rspArr.map((i)=>{
    if(i==2){
        return 0;
    }else if(i==0){
        return 5;
    }else{
        return 2;
    }
});
    return answer.join('');
}

