const [n, m] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);
let dp = Array(n + 1).fill(BigInt(0));

dp[1] = BigInt(1);
for (let i = 2; i <= n; i++)
	dp[i] = dp[i - 1] * BigInt(i);
console.log(String(dp[n] / (dp[m] * dp[n - m])));
