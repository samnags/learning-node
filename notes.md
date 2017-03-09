Node: Event driven / non-blocking I/O
- I/O is input/output. Communications between things
- non-blocking: one user can request one thing while another requests something else at same time


Modules - units of functionality

require
 - allows us to use modules that come bundle with Node
 - also allows us to load in third party libraries

export
- a method on the module object
- module.exports

nodemon
- terminal command that updates when you save

node debug
- n moves into next statement
- c continues to end


Node Engine
- Callstack
- Node API
- Callback Queue
if call stack is empty, event loop will turn to callback Queue and move function to call stack

Promises
- Can only pass one argument to resolve and reject
- .then returns a promise and takes up to two arguments - a callback function for success and one for failure

Templating Engine
- Dynamically inject values - reuse html
