'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    arr.sort();
    let max= 0;
    let id=arr[0];
    let val=1;
    let cid=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==arr[i+1])
        { 
            val+=1; 
            cid=arr[i];
        }
        else if(arr[i]!=arr[i+1])
        {
        
         if(max<val)
            {
                max=val;
                id=arr[i];
            }
            else if(max==val)
            {
                if(id>cid)
                {
                   id=cid; 
                }
                
            }
        
          val=1;
        }
    } 
        return id;
        
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
