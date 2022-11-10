function positiveSum(arr) {
  let r = 0;
  for(let n in arr){
    if(arr[n] < 0){
      arr[n] = 0;
    }
    r += arr[n];
  }
  return r;
}