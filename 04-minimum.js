"use strict"


// next challenge - writing a function that returns the smaller of the two parameters
function getThesmallNumber(num1, num2){
	if(num1 < num2){
		return num1;
	} else if(num2 < num1){
		return num2;
	} else if(num1 == num2){
		return 0;
	}
}


console.log(getThesmallNumber(12, 23));


