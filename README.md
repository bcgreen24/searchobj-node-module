![Version Badge](https://img.shields.io/npm/v/searchobj "Version Badge")
![Number of Downloads Badge](https://img.shields.io/npm/dt/searchobj "Number of Downloads Badge")

# searchobj-node-module

A module for returning a key from an object.  It traverses the entire object. It returns the value associated with the key, not the key name.

For example, with this object as a source:

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
      }

`searchobj(test, 'address')` will return:

    543 Main St

...while `searchobj(test, 'phone_numbers')` will return:

    [ { home: '555-555-4444' }, { work: '555-444-3333' } ]

Usage:

    const searchobj = require('searchobj')
    ...
    conole.log(searchobj(<object to search>, <key to search for>));

To test, run `npm test`. You'll see the test object as well as the results of several queries against it.

