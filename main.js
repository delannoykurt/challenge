"use strict"

String.prototype.isUpperCase = function(args) {
  let s = 0;
  let tmp = args.split('');
  tmp.forEach((v) => {
    if(v.toUpperCase()){
      s++;
    } else {
      s--;
    }
  })
  if(s == args.length){
    return true;
  } else {
    return false;
  }
}