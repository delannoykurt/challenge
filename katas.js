function filter_list(l) {
  for(let i =0; i < l.length; i++){
    if(typeof l[i] != 'number'){
      l[i] = -1;
    }
  }
  let t = [];
  for(let i = 0; i < l.length; i++){
    if(l[i] >= 0){
      t.push(l[i]);
    }
  }
  l = t;
  
  return l;
}