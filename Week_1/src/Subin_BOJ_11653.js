let N = Number(require("fs").readFileSync(0).toString());
let i = 2;

while (N > 0)
{
    if (N == 1)
        break;
	if (N % i == 0)
	{
		console.log(i);
		N = N / i;
	}
    else
        i++;
}