function makeNegative(num) {
  if(num == 0){
    return 0;
  }
  if(num < 0){
    return num;
  }
  if(num > 0){
    return num * -1;
  }
}