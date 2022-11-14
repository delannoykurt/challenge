function cockroachSpeed(s) {
  // 60 -> 3600
  if(s == 0) return 0;
  return Math.floor((s*60/2)-s*2);
  
}