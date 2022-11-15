function checkForFactor (base, factor) {
  if(base == 0) return false;
  return (Math.floor(base%factor) == 0) ? true : false;
}