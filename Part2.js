//PART 3====================================================

//PS THIS ASSIGNMENT DOESNT SAY HOW MANY GALLONS IT MIGHT'VE SAID BUT I CAN'T FIND IT SO IM JUST GONNA ASSUME 10 GALLONS. IF IT'S WRONG LET ME KNOW AND I CAN EASILY CHANGE THE CODE
const budget = 175;
const distanceoftrip = 1500;
const priceofgas = 3;
const gastank = 10;

//At 55 miles per, you get 30 miles per gallon
const fillups1 = distanceoftrip / 300;

//At 60 miles per hour, you get 28 miles per gallon

const fillups2 = distanceoftrip / 280;

//At 75 miles per hour you get 23 miles per gallon

const fillups3 = distanceoftrip / 230;

function results(Milesperhour, Milespergallon) {
  const fulltankofgas = priceofgas * gastank;
  const distanceof1tank = gastank * Milespergallon;
  const numberoftimestofillup = Math.round(distanceoftrip / distanceof1tank);
  const cost = fulltankofgas * numberoftimestofillup;
  const hours = Math.round(distanceoftrip / Milesperhour);
  const totalgallonsfuel = Math.round(distanceoftrip / Milespergallon);
  console.log(`Total gallons of fuel you need is: ${totalgallonsfuel}`);
  if (cost < budget) {
    console.log(`Yes you will have enough to make it!`);
  } else {
    console.log(`NO! You won't have enough money for the trip`);
  }

  console.log(`How long will the trip take in hours?: ${hours}`);
}


//Here is the caculation for Scenario 1
console.log(results(55, 30));
//Here is the caculation for Scenario 2
console.log(results(60, 28));
//Here is the caculation for Scenario 3
console.log(results(75, 23));
