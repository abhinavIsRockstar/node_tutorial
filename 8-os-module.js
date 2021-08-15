// Built in modules examples
const os = require('os');
const user = os.userInfo();
// console.log(user,'user');

console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalmemory: os.totalmem(),
    freememory: os.freemem(),
}
console.log(`currentOs ${currentOs}`)