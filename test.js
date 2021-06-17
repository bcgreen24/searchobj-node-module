
const searchobj = require('searchobj')

let test = {
  'info':
  {
    'name': 'Joe Blow',
    'address': '543 Main St',
    'phone_numbers':
    [
      {
        'home': '555-555-4444'
      },
      {
        'work': '555-444-3333'
      }
    ]
  }
}; 

console.log("Testing with this object: ");
console.log(test);
console.log("====================================");

console.log("Search for 'info' returns: ");
console.log(searchobj(test, 'info'));
console.log("====================================");

console.log("Search for 'address' returns: ");
console.log(searchobj(test, 'address'));
console.log("====================================");

console.log("Search for 'phone_numbers' returns: ");
console.log(searchobj(test, 'phone_numbers'));
console.log("====================================");

console.log("Search for 'home' returns: ");
console.log( searchobj(test, 'home'));

