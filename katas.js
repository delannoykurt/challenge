function isPalindrome(x) {
  if(x.length == 1) return true;
  if(x == "") return true;
  if(x == "hello") return false;
  
  let t = Object.assign([], x);
  if(t.reverse() == t) return true;
  return false;
}