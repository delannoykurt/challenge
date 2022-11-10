function testEven(n) {
  if((n % 2) == 0){
    return true;
  }
  if((n % 3) == 0){
    return false;
  }
  if((n % 2) == 0.5){
    return false;
  }
  if((n % 2) == 1){
    return false;
  }
}