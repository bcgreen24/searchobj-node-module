
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

console.log(searchobj(test, 'info'));
console.log(searchobj(test, 'address'));
console.log(searchobj(test, 'home'));
console.log(searchobj(test, 'phone_numbers'));


