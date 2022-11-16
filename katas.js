function toCsvText(array) {
  let res = [];
  for(let num of array){
    res.push(num);
  }
  res = res.join(' ');  // '1,2,3,4,5...'
  
  for(let i in res){
    if(res[i] == ' '){
      res[i] = '\'\n+\'';
    }
  }
  
  return res.split(' ').join('\n');
  
}