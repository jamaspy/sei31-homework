const path = require('path')
const logger = require('./logger')
const os = require('os')

logger('ben')

var pathObj = path.parse(__filename)

console.log(pathObj)

let memoryAvailable = os.totalmem();
let memFree = os.freemem();

console.log(memoryAvailable)
console.log(memFree)



