var number=function(array){
  if(array == []) return array;
  let i = 0;
  for(let n in array){
    array[n] = String(i+1) + ": " + array[i];
    i++;
  }
  return array;
}