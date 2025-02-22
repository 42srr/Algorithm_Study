const input = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n');

const N = input[0];

let stack = [];
let i = 0;

for (let j = 1; j <= N; j++) {
	ans = [];
	command = input[j].split(" ");
	if (command[0] === "push")
    {
		stack.push(Number(command[1]));
        i++;
    }
	else if (command[0] === "pop")
    {
    	if (!stack[0])
			ans.push(-1);
		else
		{
			ans.push(stack.pop());
			i--;
		}
    }
	else if (command[0] === "size")
		ans.push(i);
	else if (command[0] === "empty")
		ans.push(stack[0] ? 0 : 1);
	else if (command[0] === "top")
	{
		if (!stack[0])
			ans.push(-1);
		else
			ans.push(stack[i - 1]);
	}
}
console.log(ans.join('\n'));
