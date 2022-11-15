function litres(time) {
  if(time == 0 || time < 2) {
    return 0;
  }
  if(time == 2){
    return 1;
  }
  if(time > 3){
    return Math.floor(time*0.5);
  }
}