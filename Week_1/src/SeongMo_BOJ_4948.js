const nums = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);
const limit = 123456 * 2;

let isPrime = Array(limit + 1).fill(true);
isPrime[0] = isPrime[1] = false;
for (let i = 2; i * i <= limit; i++) {
	if (isPrime[i]) {
		for (let j = i * i; j <= limit; j += i)
			isPrime[j] = false;
	}
}

let dp = Array(limit + 1).fill(0);
dp[2] = 1;
for (let i = 3; i <= limit; i++)
	dp[i] = dp[i - 1] + isPrime[i];

let i = 0;
while (nums[i] != 0)
{
	let cnt = dp[2 * nums[i]];
	cnt -= dp[nums[i]];
	console.log(cnt);
	i++;
}
