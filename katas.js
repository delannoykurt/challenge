function removeEveryOther(arr){
  let s = arr.length;
  for(let i = 0; i < s; i++){
    arr.splice(i+1,1);
  }
  return arr;
}
// [0,1,2]
// [0,1,2,3,4,5,...]
