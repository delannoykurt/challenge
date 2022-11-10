function findAverage(array) {
  // your code here
  if(array == null && array == NaN && array == undefined && array == "" && array == [])
    return 0;
  
  if(array.length == 0)
    return 0;
  
  let r = 0;
  for(let n in array){
    r += array[n];
  }
 return r / array.length;
}