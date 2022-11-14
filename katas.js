function correct(string)
{
  let tmp = Object.assign([], string);
  
  for(let i = 0; i < tmp.length; i++){
    if(tmp[i] == '0'){
      tmp[i] = 'O';
    }
    if(tmp[i] == '1'){
      tmp[i] = 'I';
    }
    if(tmp[i] == '5'){
      tmp[i] = 'S';
    }
  }
  return tmp.join().replace(/,/g, '');
}
