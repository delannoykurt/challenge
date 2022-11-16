const getMsg = (n) => `Player ${n} won!`;

function rps(a,b){
  if(a == 'rock' && b == 'scissors') return getMsg(1);
  if(a == 'scissors' && b == 'paper') return getMsg(1);
  if(a == 'paper' && b == 'rock') return getMsg(1);
  
  if(a == 'scissors' && b == 'rock') return getMsg(2);
  if(a == 'paper' && b == 'scissors') return getMsg(2);
  if(a == 'rock' && b == 'paper') return getMsg(2);
  
  if(a == 'rock' && b == 'rock') return 'Draw!';
  if(a == 'scissors' && b == 'scissors') return 'Draw!';
  if(a == 'paper' && b == 'paper') return 'Draw!';
}