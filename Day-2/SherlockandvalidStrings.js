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
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    // Write your code here
    
    let obj = {};
    for(let i=0;i<s.length;i++)
  {
    if(obj[s[i]]==undefined)
    {
      obj[s[i]]=1;
    }
    else
    {
    obj[s[i]]+=1;
   } 
  }
 
  let frequencies=[];
  for (let i in obj) {
    frequencies.push(obj[i]);
  }
  frequencies.sort();
   let max=frequencies[frequencies.length-1],min=frequencies[0];
   
  for(let i=1;i<frequencies.length;i++)
  {
      if(max<obj[i])
      max=obj[i];
      if(min>obj[i])
      min=obj[i];
           
  }
  let max_count=0;
  let min_count=0;
  for(let i=0;i<frequencies.length;i++)
  {
     if(frequencies[i]==max)
     max_count++;
     if(frequencies[i]==min)
     min_count++; 
  }
  
  
  
   if(min==max) 
   {
    return 'YES';
  }
  if(max-(min-1)==max && min_count==1 && max_count!=1) 
  {
    return 'YES';
  }
  if(max-min!= 1) 
  {
    return 'NO';
  }
  if(max_count==min_count) 
  {
    return 'NO';
  }
  if (max_count==1 || min_count==1) 
  {
    return 'YES';
  }

  return 'NO';


    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = isValid(s);

    ws.write(result + '\n');

    ws.end();
}
