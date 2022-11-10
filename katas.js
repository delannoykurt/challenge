function basicOp(operation, value1, value2)
{
  if(operation == '+'){
    return value1 + value2;
  }
  if(operation == '-'){
    return value1 - value2;
  }
  if(operation == '*'){
    return value1 * value2;
  }
  if(operation == '/'){
    if(value1 == 0)
      return 0;
    return value1 / value2;
  }
}