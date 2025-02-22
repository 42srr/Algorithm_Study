const input = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map(Number);

const K = input[0];
let stack = [0];

for (let i = 1; i <= K; i++)
{
	if (input[i] === 0)
		stack.pop();
	else
		stack.push(input[i]);
}
console.log(stack.reduce((acc, cur) => acc + cur, stack[0]));
