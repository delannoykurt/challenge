"use strict"


let num1 = 50;
let num2 = 75;
let num3 = -1;


/**
    @params integer positive
    @return boolean
    @description for all values not positive, return N -2, if not return boolean.
**/
function isEven(number){
	if((number % 2) == 0){
		return true;
	} else if((number % 2) != 0){
		return false;
	} else {
		return number -2;
	}
	isEven(number);
}

console.log(isEven(num3));
