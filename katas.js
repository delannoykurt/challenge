function enough(cap, on, wait) {
  let r = on + wait;
  if(r > cap){
    return r - cap;
  } else {
    return 0;
  }
}