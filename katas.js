function returnSmall(numbers) {
  let v = numbers.indexOf(Math.min(...numbers));
  return v;
}

function removeSmallest(numbers){
  // debug
  // -------------------
  
  console.log(numbers);
  
  // -------------------
  
  let minimum = returnSmall(numbers);
  let tmp = numbers.slice();
  tmp.splice(minimum,1);
  return tmp;
  
}