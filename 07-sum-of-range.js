"use strict"

function getIntervalNumber(start, stop){
	let interval = [];
	for(let i = start; i < stop; i++){
		interval[i] = i;
	}
	return interval;
}


console.log(getIntervalNumber(1, 10));

// --------------------------

function getIntervalNumberRestrict(start, stop, restrict){
	let interval = [];
	interval = getIntervalNumber(start, stop);
	interval[interval.length + restrict].remove();
	return interval;
}


console.log(getIntervalNumberRestrict(5, 2, -1));

// ----------------------------------

let sum = 0;

function sumOfRange(start, stop){
	let tmp += getIntervalNumber(start, stop);
	return tmp;
}

console.log(sumOfRange(getIntervalNumber(1, 10)));
