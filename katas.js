function twiceAsOld(dadYearsOld, sonYearsOld) {
  let age = sonYearsOld - dadYearsOld;
  if(age == 0){
    return 0;
  } else {
    let a =  sonYearsOld*2-dadYearsOld;
    if(a < 0){
      return a*-1;
    } else {
      return a;
    }
  }
}