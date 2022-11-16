function squareDigits(num){
  let x = (num).toString().split('');
  x = x.map(v => v**2);
  x = x.join('');
  return Number(x);
}