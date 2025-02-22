const [n, ...command] = require("fs")
.readFileSync(0)
.toString()
.trim()
.split('\n');

const N = Number(n);

let deque = [];
let ans = [];

for (let i = 0; i < N; i++){
	let now = command[i];
	if (now === 'pop_front')
		ans.push(deque.length === 0 ? -1 : deque.shift());
	else if (now === 'pop_back')
		ans.push(deque.length === 0 ? -1 : deque.pop());
	else if (now === 'front')
		ans.push(deque.length === 0 ? -1 : deque[0]);
	else if (now === 'back')
		ans.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
	else if (now === 'size')
		ans.push(deque.length);
	else if (now === 'empty')
		ans.push(deque.length === 0 ? 1 : 0);
	else if (now.includes('push_back'))
		deque.push(Number(now.slice(10)));
	else
		deque.unshift(Number(now.slice(11)));
}
console.log(ans.join('\n'));
