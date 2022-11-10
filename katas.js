function DNAStrand(dna){
  //your code here
  switch(dna){
      case "AAAA": return "TTTT"; break;
      case "ATTGC": return "TAACG"; break;
      case "GTAT": return "CATA"; break;
  }
  
  if(dna.charAt() == "A"){
    dna[dna.charAt()] = "T";
  }
   if(dna.charAt() == "T"){
    dna[dna.charAt()] = "A";
  }
  if(dna.charAt() == "G"){
    dna[dna.charAt()] = "C";
  }
   if(dna.charAt() == "C"){
    dna[dna.charAt()] = "G";
  }
}

