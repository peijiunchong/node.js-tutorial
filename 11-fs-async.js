const { readFile, writeFile, write } = require('fs')

console.log('start');
readFile('./folder/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./folder/2nd.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./folder/result-async.txt', 
                    `Here is the result: ${first}, ${second}`, 
                    {flag: 'a'},
                    (err, result) => {
                        if(err){
                            console.log(err);
                            return
                        }
                        // console.log(result);
                        console.log('done with this task');
                    }
                )
    })
})
console.log('starting new task');