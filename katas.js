function findAverage(array) {
  // your code here
  let r = 0;
  for(let n in array){
    r += array[n];
  }
 return r / array.length;
}