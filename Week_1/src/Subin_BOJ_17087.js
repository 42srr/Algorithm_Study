let [[N, S], A] = require("fs").readFileSync(0).toString().split("\n").map(v => v.split(" ").map(Number));
let arr = Array(N).fill(0);
arr[0] = get_abs(S-A[0]);

for (let i=1; i<N; i++)
    arr[i] = get_gcd(get_abs(S-A[i]), arr[i-1]);
console.log(arr[N-1]);

function get_abs(a)
{
    if (a < 0)
        return -a;
    else
        return a;
}

function get_gcd(a, b)
{
	let r = 1;

	while (r > 0)
	{
		if (a / b == 0)
			return 1;
		r = a % b;
		a = b;
		b = r;
	}
	return a;
}