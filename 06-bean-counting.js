"use strict"

let totalB = 0;

function countBs(text){
	for(let i = 0; i < text.length; i++){
		if(text[i] == "B"){
			totalB++;
		}
	}
	return totalB;
}

console.log(countBs("ASBBCB"));



// ---------------------------------

let letterDoublon = 0;

function countChars(text, item){
	for(let i = 0; i < text.length; i++){
		if(text[i] == item){
			letterDoublon++;
		}
	}
	return letterDoublon;
}


console.log(countChar("kakkerlak", "k"));

