const [N, nums] = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map(el => el.split(' ').map(Number));

let ans = [];
let stack = [];

class Tower {
	constructor(index, data) {
		this.dist = index + 1;
		this.height = data;
	}
}

for (let i = 0; i < N; i++) {
	const now = new Tower(i, nums[i]);

	if (stack.length === 0) {
		stack.push(now);
		ans.push(0);
	}
	else if (now.height > stack[stack.length - 1].height) {
		while (stack.length) {
			if (now.height < stack[stack.length - 1].height){
				break;
			} else {
				stack.pop();
			}
		}
		ans.push(stack.length ? stack[stack.length - 1].dist : 0);
		stack.push(now);
	} else {
		ans.push(stack.length ? stack[stack.length - 1].dist : 0);
		stack.push(now);
	}
}

console.log(ans.join(' '));
