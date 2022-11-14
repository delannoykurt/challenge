function getSum( a,b )
{
   if(a == b){
     return 1;
   }
  if(a + b >= 1) {
    return 1;
  }
  if(a < 0 || b < 0){
    return -1;
  }
}