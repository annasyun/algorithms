const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  for (let i = 1; i <= +input[0]; i++) console.log('*'.repeat(i));
});

// function star(n){
//     let input='';
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=i;j++){
//             input+='*'
//         }
//             input+='\n'
//     }
//     return input;
// }