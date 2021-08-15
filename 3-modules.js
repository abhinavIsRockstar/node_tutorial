console.log('inside 3-modules.js')

// Modules


require('./7-mind-grenade')
const names = require('./4-names')
const sayHi = require('./5-utils')
// console.log(names,'name')


sayHi('ritesh');
// sayHi(names.first_name);
// sayHi(names.last_name);
