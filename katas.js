var humanYearsCatYearsDogYears = function(humanYears) {
  let a = 15;
  let b = 9;
  let c = 4;
  let d = 5;
  let cat = a;
  let dog = a;
  if(humanYears == 1){
    return [humanYears, cat, dog];
  } else if(humanYears == 2){
    return [humanYears, cat+b, dog+b];
  } else if(humanYears >= 3){
    return [humanYears, cat+b+((humanYears-2) *c), dog+b+((humanYears-2)*d)];
  }
  
}
