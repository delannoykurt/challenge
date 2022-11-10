function check(a, x) {
  // your code here
  for(let n in a){
    if(a[n] === x){
      return true;
    }
  }
  return false;
}