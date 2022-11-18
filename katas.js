function sumArray(array) {
  let min = 0, max = 0, n = 1;
  let tmp;

  if(array == null || array == []){
    return 0;
  }


  // tri by order >>>
  while(n < array.length-1){
    for(let i = 0; i < array.length-1; i++){
    if(array[i] > array[i+1]){
      tmp = array[i];
      array[i] = array[i+1];
      array[i+1] = tmp;
    }
   }
   n++
  }
  min = array[0];
  max = [array.length-1];
  // suppression of the greater value and the less value
  // and addition the sum of array
  array.shift();
  array.pop();
  n = 0;
  min = 0;
  max = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
      min+= array[i];
    } else{
      max+= array[i];
    }
    n += array[i];
  }

  if(array.length <= 2){
    return 0;
  } else {
    // check the total number posisitve/negative
    if(min > max){
        return min - max;
    } else if(max == 0){
        return min;
    } else if(min == 0){
        return max;
    }
  }
}
