function invert(array) {
  for(let i = 0 ; i < array.length; i++){
    array[i] = -array[i];
  }
  return array;
}