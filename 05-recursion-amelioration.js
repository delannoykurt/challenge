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
	if(number > 0){
		if((number % 2) == 0){
			return true;
		} else{
			return false;
		}
	} else {
		return false;
	}
}

console.log(isEven(num1));
