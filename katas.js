function arithmetic(a, b, operator){
  if(operator == "add") return a + b;
  if(operator == "subtract") return a - b;
  if(operator == "multiply") return a * b;
  if(operator == "divide") {
    if(a == 0) return 1;
    return Math.floor(a/b);
  }
}