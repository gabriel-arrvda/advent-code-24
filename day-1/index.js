const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split('\n');

const [col1, col2] = lines.map(line => line.split(/\s+/).map(Number)).reduce(([col1, col2], [a, b]) => {
    if(a) col1.push(a);
    if(b) col2.push(b);
    return [col1, col2];
  }, [[], []]);

col1.sort((a, b) => a - b);
col2.sort((a, b) => a - b);


// Solution for part 1
let output = 0;

for (let i = 0; i < col1.length; i++) {
  let temp = col1[i] - col2[i];
  output += Math.abs(temp)
}

console.log(output);

// Solution for part 2
let output2 = 0;

for (let i = 0; i < col1.length; i++) {
    let similarity = 0;
    const frequency = col2.reduce((count, x) => (x === col1[i] ? count + 1 : count),0);
    similarity = col1[i] * frequency;
    output2 += similarity;
}

console.log(output2);