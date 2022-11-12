function findNeedle(haystack) {
  let p = 0;
  if(haystack.includes("needle")){
    for(let i = 0; i < haystack.length; i++){
      if(haystack[i] == "needle"){
        p = i;
      }
    }
    return `found the needle at position ${p}`;
  }
}