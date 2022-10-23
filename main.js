"use strict"

let offset = 1;

for(let i = 0; i < 10; i++){
  offset = 1;
  for(let j = 0; j < 10; j++){
    console.log("# ")
  }
  if((i % 2) == 0){
    offset = 0;
  }
  if(offset == 0){
    console.log(" ");
  }
  console.log("\n");
}