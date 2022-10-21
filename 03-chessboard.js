"use strict"


// second challenge - drawing a gridof 8x8 with caracter "#"
let N = 8;
let item = "# # # #";

for(let i = 0; i< N; i++){
	if((i % 2) == 0){
		console.log(item + "\n");
	}else {
		console.log(" " + item + "\n");
	}
}
