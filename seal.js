/**
 * 
 * Tomasz Łakomy
 */


// 'use strict';

const userData = {
  age: 10,
  country: 'Country',
  name: 'Name',
  surname: 'Surname',
};

Object.seal(userData);

console.log(userData);

userData.age++;
console.log(userData);


//use strict, throw TypeError
userData.city = 'Updated city';
console.log(userData);

delete userData.name;
console.log(userData);