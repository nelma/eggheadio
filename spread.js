/**
 * 
 * Tomasz Łakomy
 */

const isAdmin = () => true;

const userData = {
  name: 'Name',
  surname: 'Surname'
}

const userObject = {
  id: 123,
  ...userData,
  ...(isAdmin() ? {is_admin: true} : {})
}

console.log(userObject);