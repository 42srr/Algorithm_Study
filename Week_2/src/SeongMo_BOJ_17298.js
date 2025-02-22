const [N, nums] = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map(el => el.split(' ').map(Number));

let ans = [];
let stack = [];

for (let i = 0; i < N; i++) {
	const now = nums[N - i - 1];

	if (stack.length === 0) {
		stack.push(now);
		ans.push(-1);
	}
	else if (now >= stack[stack.length - 1]) {
		while (stack.length) {
			if (now < stack[stack.length - 1]){
				break;
			} else {
				stack.pop();
			}
		}
		ans.push(stack.length ? stack[stack.length - 1] : -1);
		stack.push(now);
	} else {
		ans.push(stack.length ? stack[stack.length - 1] : -1);
		stack.push(now);
	}
}

console.log(ans.reverse().join(' '));
