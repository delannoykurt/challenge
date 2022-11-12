function countSheeps(arrayOfSheep) {
  let n = 0;
  for(let i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] == true) n++;
  }
  return n;
}