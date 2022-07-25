const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./folder/first.txt', 'utf8')
const second = readFileSync('./folder/2nd.txt', 'utf8')

console.log(first, second);

writeFileSync(
    './folder/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
)

console.log('done with this task');
console.log('starting new task');