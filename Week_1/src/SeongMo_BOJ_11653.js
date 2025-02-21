let N = Number(require("fs").readFileSync(0).toString().trim());
let ans = [];
let i = 2;

while (N != 1)
{
	if (N % i == 0)
	{
		N /= i;
		ans.push(i);
	}
	else
		i++;
}

if (ans)
	console.log(ans.join('\n'));
