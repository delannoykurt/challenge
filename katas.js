function rentalCarCost(d) {
  // 40$ / j
  // += 7j / remise de 50$
  // += 3j / remise de 20$
  let price = 40;
  let total = 0;
  let reduce = 0;
  let n =0;
  
  if(d < 3){
    reduce = 0;
    while(n < d){
      total += price - reduce;
      n++;
    }
  } else if(d >= 3 && d < 7){
    reduce = 20;
    while(n < d){
      total += price;
      n++;
    }
  } else if(d >= 7){
    reduce = 50;
    while(n < d){
      total += price;
      n++;
    }
  }
  return total - reduce;
}