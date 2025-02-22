let [[N, S], A] = require("fs").readFileSync(0).toString().split("\n").map(v => v.split(" ").map(Number));
let cnt = 0;
let arr = Array(N).fill(true);

for (let i=0; i<N; i++)
	back(A[i], i+1);

console.log(cnt);

function back(sum, idx)
{
	if (sum == S)
		cnt++;
	for (let i=idx; i<N; i++)
		back(sum+A[i], i+1);
}