function hero(bullets, dragons){
  if(bullets == 0) return false;
  if(bullets>=dragons*2) return true;
  return false;
}
