function flip(){

for (let i = 0; i < 10; i++){

var coinFlip = Math.round(Math.random());
if (coinFlip === 1){
  console.log('The flip reveals', 'heads', '.');
}

if (coinFlip === 0){
  console.log('The flip reveals', 'tails', '.');
}
}
}
flip();