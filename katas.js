function grow(x){
  let tmp = x[0];
  for(let i = 0; i < x.length-1; i++){
    tmp = tmp * x[i+1];
  }
  return tmp;
}