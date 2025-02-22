const limit = 123456*2;
let nums = require("fs").readFileSync(0).toString().split("\n").map(Number);
let arr = Array(limit+1).fill(true);
arr[0] = arr[1] = false;

for (let i=2; i<=limit/2; i++)
{
    if (!arr[i])
        continue;
    for (let j=2; i*j<=limit; j++)
        arr[i*j] = false;
}

for (let i=0; i<nums.length; i++)
{
	let n = nums[i];
	let cnt = 0;

    if (n == 0)
        return ;
	for (let j=n+1; j<=2*n; j++)
	    if (arr[j])
			cnt++;
	console.log(cnt);
}