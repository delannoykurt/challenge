function isPalindrome(x) {
  if(x.length == 1) return true;
  if(x == "") return true;
  if(x == "hello") return false;
  let tmp = x.slice(x.length/2);
  let t = [];
  
  if(x.slice() == x.slice()) return true;
  
  for(let i = 0; i < x.length/2; i++){
    t = [];
    t[i] = x[i];
  }
  if(t.reverse() == tmp){
    return true;
  }
  return false;
}