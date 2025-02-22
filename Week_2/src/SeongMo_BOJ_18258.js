const [N, ...command] = require("fs")
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map((el, index) => index === 0 ?
	Number(el) :
				el.startsWith('push') ?
					Number(el.slice(5)) : el
);

let queue = [];
let ans = [];
let start = 0;

for (let i = 0; i < N; i++)
{
	if (typeof(command[i]) === 'number')
		queue.push(command[i]);
	else if (command[i] === 'pop')
	{
		if (queue.length - start === 0)
			ans.push(-1);
		else
			ans.push(queue[start++]);
	}
	else if (command[i] === 'size')
		ans.push(queue.length - start);
	else if (command[i] === 'empty')
		ans.push(queue.length - start === 0 ? 1 : 0);
	else if (command[i] === 'front')
		ans.push(queue.length - start != 0 ? queue[start] : -1);
	else if (command[i] === 'back')
		ans.push(queue.length - start != 0 ? queue[queue.length - 1] : -1);
}
console.log(ans.join("\n"));

// shift() 시간복잡도 O(n)이라 시간초과
