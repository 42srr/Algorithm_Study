let input = require("fs").readFileSync(0).toString().split("\n").map(Number);

const limit = 1000000;
let arr = Array(limit+1).fill(true);
arr[0] = arr[1] = false;

for (let i=2; i<=limit/2; i++)
{
    if (!arr[i])
        continue;
    for (let j=2; i*j<=limit; j++)
        arr[i*j] = false;
}

for (let i=1; i<=input[0]; i++)
{
	let n = input[i];
	let cnt = 0;

	for (let j=2; j<=n; j++)
	    if (arr[j] && arr[n-j])
			if (n-j-j <= 0)
				cnt++;
	console.log(cnt);
}