function fakeBin(x){
  
  x = x.split('');
  for(let i = 0; i < x.length; i++){
    if(x[i] == '5' || x[i] > '5'){
      x[i] = '1';
    } else {
      x[i] = '0';
    }
  }
  x = x.join('');
  return x;
}