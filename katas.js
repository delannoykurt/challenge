function index(array, n){
  let indice = array[n];
  
  if(n > array.length) return -1;
  
  let r = indice**n;
  return r;
}