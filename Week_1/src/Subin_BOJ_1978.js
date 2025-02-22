let input = require("fs").readFileSync(0).toString().split("\n");

const limit = 1000;
let cnt = 0;
let N = Number(input[0]);
let nums = input[1].split(" ").map(Number);
let arr = Array(limit + 1).fill(true);
arr[0] = arr[1] = false;

for (let i=2; i<=limit/2; i++)
{
    if (!arr[i])
        continue;
    for (let j=2; i*j<=limit; j++)
        arr[i*j] = false;
}
for (let i=0; i<N; i++)
    if (arr[nums[i]])
		cnt++;

console.log(cnt);