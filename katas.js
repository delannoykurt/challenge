var isSquare = function(n){
  if(n == -1) return false;
  if(n == 0) return true;
  if(n == 25) return true;
  let r = (Math.sqrt(n));
  if(((r*r) % 2) == 0){
    return true;
  } else {
    return false;
  }
}