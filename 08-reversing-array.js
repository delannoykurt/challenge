"use strict"

function reverseArray(T){
	let tmp = [];
	tmp = T.reverse();
	return tmp;
}

console.log(reverseArray(["A", "B", "C"]));

// ----------------------

let arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arrayValue) {
	arrayValue = reverseArray(arrayValue);
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
