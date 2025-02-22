const input = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n');

const N = input[0];
const tokens = input[1];

let stack = [];
for (let i = 0; i < tokens.length; i++)
{
	if ("+-*/".includes(tokens[i]))
	{
		if (tokens[i] === '+')
			stack.push(stack.pop() + stack.pop());
		else if (tokens[i] === '-')
		{
			let back = stack.pop();
			let front = stack.pop();
			stack.push(front - back);
		}
		else if (tokens[i] === '*')
			stack.push(stack.pop() * stack.pop());
		else if (tokens[i] === '/')
		{
			let back = stack.pop();
			let front = stack.pop();
			stack.push(front / back);
		}
	}
	else
	{
		let num = Number(input[tokens[i].charCodeAt(0) - 'A'.charCodeAt(0) + 2]);
		stack.push(num);
	}
}
console.log(stack[0].toFixed(2));
