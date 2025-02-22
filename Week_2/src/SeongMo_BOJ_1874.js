const [n, ...nums] = require("fs")
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map(Number);

let ans = [];
let stack = [];
let now = 1;

for (let i = 0; i < n; i++){
	while (now <= nums[i]){
		stack.push(now++);
		ans.push('+');
	}
	if (stack[stack.length - 1] === nums[i]) {
		stack.pop();
		ans.push('-');
	}
	else if (now > nums[i]) {
		ans = [];
		break;
	}
}
console.log(ans.length === 0 ? 'NO' : ans.join('\n'));
