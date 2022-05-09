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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here
    
    let str= s.replace(/ /g, "");
    const n= str.length;
    
    const L= Math.sqrt(n);
    let L_col = Math.ceil(L);
    let L_row = Math.ceil(L);
    
    if(L_row*L_col<n)
    L_row=L_col;
    
    
   const grid=[];


   let j=0; 
    for (let i=0; i < L_row; i++) {
         let chars = '',j=i;
         
        while (j < str.length) {
            chars += str[j];
            j+=L_col;
        }
        
        grid.push(chars);
    }
    
    return grid.join(' ');
       
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
