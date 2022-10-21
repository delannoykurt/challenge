"use strict"


// next challenge - replace and display fizz, buzz, or fizzbuzz ...
let start = 0;
let stop = 100;

for(let i = start; i < stop; i++){
	if((i % 3) == 0){
		console.log("fizz");
	}
	if((i % 5) == 0){
		console.log("Buzz");
	}
	if((i % 3) == 0 && (i % 5) == 0){
		console.log("FissBuzz");
	}
}
