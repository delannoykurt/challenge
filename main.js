"use strict"


// L'idee : serais de commencer a eliminer 0.3.6..., une personne sur 3
// ainsi il y aurais un ecart de 3, donc sur un total de 51 personnes
// la derniere serait epargner.
function josephus() {
	let nPrisoners = [];
	for(let i = 0; i < 41; i++){
		nPrisoners[i] = ((i % 2) == 0) ? 1 : 0;
	}
	
	return nPrisoners;
}


console.log(josephus());
