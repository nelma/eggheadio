/**
 * 
 * Tomasz Łakomy
 */

'use strict';

//use strict thor typeError if try to change any values - const

//without use strict, it is not possible to change value, because se Object.freeze

const USER_DATA = Object.freeze( {
  age: 10,
  country: 'Country',
  name: 'Name',
  surname: 'Surname',
});

console.log('data', USER_DATA);

USER_DATA.country = 'Update Country';
console.log('data', USER_DATA);