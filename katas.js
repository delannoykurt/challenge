function lovefunc(flower1, flower2){
  if(flower1 == 0 && flower2 == 1) return true;
  if(flower1%2==0 && flower2%2==0 || flower1%2==1 && flower2%2== 1){
    return false;
  } else {
    return true;
  }
  
}