function removeExclamationMarks(s) {
  let t = [];
  t = s.split('');
  for(let i in t){
    if(t[i] == '!'){
      t[i] = '';
    }
  }
  return t.join('');
}