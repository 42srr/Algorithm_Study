const input = require("fs").readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);
let ans = 0;
let i = 0;

while (i < N)
{
	let j = 1;
	while (j < nums[i])
	{
		j++;
		if (nums[i] == j)
			ans += 1;
		if (nums[i] % j == 0)
			break;
	}
	i++;
}

console.log(ans);
