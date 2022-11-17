
let max = function(list){
  let t = list.sort((a,b) => a - b);
  return t[t.length-1];
}

let min = function(list){
  let t = list.sort((a,b) => a - b);
  return t[0];
}