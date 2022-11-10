const reverseSeq = n => {
  let tmp = [];
  let i = 0;
  if(n>0){
    while(n>0){
      tmp[i] = n;
      n--;
      i++;
    }
  }
  return tmp;
};
