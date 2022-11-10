function bmi(weight, height) {
  let r = weight/height/height;
  
  if(r <= 18.5){
     return "Underweight";
  }
  
  if(r <= 25.0){
     return "Normal";
  }
  
  if(r <= 30.0){
     return "Overweight";
  }
  
  if(r > 30){
     return "Obese";
  }
  