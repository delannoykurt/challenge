var countSheep = function (num){
  
  let s = "";
  if(num == 0){
    return "";
  }
  
  for(let i = 1; i < num+1; i++){
    s += i + " sheep...";
  }
  return s;
}