// Az objektum alkalmazása nem ment, syntax hibák tömkelege, az elmélet múlt héten még viálgos volt, de nem elég hogy önállóan egy ilyen feladatot megoldjak

// deklarálok egy tömböt és egy funkciót, amely kinyomtatja a tömb elemeit for ciklus segítségével
let passengers = ['John', 'Steve', 'Sam', 'Danielle'];
listPassengers = function () {
  for (let passenger in passengers) {
    console.log('Passenger: ', passengers[passenger]);
  }
};
listPassengers();

// az eredeti tömbhez hozzárendelek egy új elemet és az így kapott tömböt nyomtatom ki a listPassenger() funkció meghívásával
passengers.push('Lindsay');
let x = passengers.length;
console.log(passengers[x - 1], ' was added to the ship');
listPassengers();

// ez a rész messze nem úgy működik, ahogy a feladat szerint működnie kell
let distance = 750;
let fuel = 400;
let speedometer = 0;
let shields = true;
travel = function () {
  console.log('trying to travel:', distance);
  if (fuel === 0) {
    console.log('can not go futher, tank is empty');
  } else {
    console.log('the spaceship is at:', distance);
    fuel = fuel - distance / 2;
    console.log('the spaceship has: ', fuel, 'fuel');
    newDistance = 200;
    console.log('trying to travel:', newDistance);
    if (newDistance > fuel * 2) {
      distance = newDistance - fuel * 2;
      console.log('can only travel: ', distance);
    } else {
      console.log('the spaceship is at:', distance);
      if (fuel < 30) {
        shields = false;
        console.log('fuel is low, turning off shields...');
      }
    }
  }
};
travel();
