let distanceToPump = 50;
let fuelLeft = 2;
let mpg = 25;


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

  let res = (distanceToPump - (fuelLeft * mpg));
  if( res <= 0){
    return true;
  } else {
    return false;
  }
  
};

zeroFuel(distanceToPump, fuelLeft, mpg);


/*

variables
----------
miles gallons fuel => entier


vous faite du camping avec vos amis, lorsque vous revenez chez vous, vous realiser
que la pompe la plus proche est a 5o gallons
Vous n'avais pas realiser votre moyenne prevue de 25 miles par gallon
En prenant compte de ces facteurs, ... il vous reste 2 gallons.
ecrire une fonction dit vous dit si oui ou non il vous possible de se dirtiger vers la pompe ou non.


si c'est possible retourner vrai, sinon non

*/ 
