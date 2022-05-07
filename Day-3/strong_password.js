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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    
    let lower_c =false,upper_c=false,special_c=false,digit_c=false;
    
    const num="0123456789".split('')
    const lower_case="abcdefghijklmnopqrstuvwxyz".split('')
    const upper_case="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    const special_characters="!@#$%^&*()-+".split('')


    let count=0;
    
    for(let i=0;i<n;i++) 
    {
        var c = password.charAt(i);


        if(!digit_c && findchar(num,c)) 
        {
           count++;
            digit_c=true;
        }
        if(!lower_c && findchar(lower_case,c)) {
           count++;
            lower_c=true;
        }
        if(!upper_c && findchar(upper_case,c)) {
              count++;
            upper_c=true;
        }
        if(!special_c&& findchar(special_characters,c)) {
             count++;
            special_c=true;
        }
    }
    
    count=4-count;
    
    if(n+count< 6) 
    {
        count=6-n;
    }
    
    function findchar(arr, c) 
    {
        const l=arr.length;
        for(let i=0;i<l;i++)
         {
            if(c==arr[i]) 
            return true;
        }
        return false;
    }
    
    return count;

    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
