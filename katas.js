function strCount(str, letter){  
  let l = 0;
  if(str == ""){
    return 0;
  }
  for(let i = 0; i < str.length; i++){
    if(str[i] == letter){
      l++;
    }
  }
  return l;
}