const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf8',(error,result)=>{
    if(error){
        return  error;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(error,result)=>{
        if(error){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Hello this is written by code ${first},${second}`,
        (err,result) =>{
            if(err) {
                console.log(err);
                return
            }
            console.log(result);
        }
        )
    })
})