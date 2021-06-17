![Version Badge](https://img.shields.io/npm/v/searchobj "Version Badge")
![Number of Downloads Badge](https://img.shields.io/npm/dt/searchobj "Number of Downloads Badge")

## searchobj-node-module

A module for returning a key's value from a JavaScript object.  It traverses the entire object and returns the value associated with the key, whether it's a string, JavaScript object, or array.

###Motivation

I was working on a personal project that involved consuming JSON files via an API, and had a need to grab the value of a particular key without knowing what the names of the keys higher in the tree were. 

I was consuming multiple JSON files, each of which had a slightly different structure except for the key I was interested in, which always had the same name and whose value was always an array of objects. So-- I wrote a helper function to find the key in question, and then decided to release it as a Node module, hoping it may be of use to others.

###How It Works

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

...and `searchobj(test, 'home')` will return:

    555-555-4444

...while `searchobj(test, 'phone_numbers')` will return:

    [ { home: '555-555-4444' }, { work: '555-444-3333' } ]

###Usage:

    const searchobj = require('searchobj')
    ...
    conole.log(searchobj(<object to search>, <key to search for>));

To test, run `npm test`. You'll see the test object as well as the results of several queries against it.

-30-