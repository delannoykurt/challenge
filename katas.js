function roundToNext5(n){
  
  if((n%5) == 0){
    return n;
  } else {
    // premier chiffre correspondant avnt - apres
    while((n%5!=0)){
      n++;
    }
    return n;
  }
}