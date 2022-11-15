function smash (words) {
   if(words == []){
     return "";
   }
   let s = words.toString();
   s = s.replace(/,/g, " ");
   return s;
};