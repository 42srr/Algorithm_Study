const [T, ...cases] = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n');

let ans = [];

for (let i = 0; i < T; i++) {
	let temp = [];
	let now = i * 3;

	let p = cases[now].split('');
	let n = cases[now + 1];
	let nums = JSON.parse(cases[now + 2]);

	let isError = false;


	reverse = false;
	start = 0;
	end = n;

	for(let j = 0; j < p.length; j++) {
		if (p[j] === 'R') {
			reverse = !reverse;
		}
		else {
			if (nums[0] === undefined || start >= end)
			{
				ans.push('error');
				isError = true;
				break;
			}
			else if (!reverse) {
				start++;
			}
			else {
				end--;
			}
		}
	}
	if (isError) {
		continue;
	}
	temp.push('[');
	temp.push(!reverse ? nums.slice(start, end).join(',') : nums.reverse().slice(nums.length - end,nums.length - start).join(','));
	temp.push(']')
	ans.push(temp.join(''));
}

console.log(ans.join('\n'));
