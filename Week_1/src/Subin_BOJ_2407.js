let [n, m] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let dp = Array(n+1).fill(0);

dp[0] = BigInt(1);
for (let i=1; i<=n; i++)
	dp[i] = dp[i-1] * BigInt(i);

console.log((dp[n] / (dp[n-m] * dp[m])).toString());