let [N, S, ...nums] = require("fs").readFileSync(0).toString().split("\n").map(Number);
let arr = Array(N-1).fill(0);
arr[0] = get_abs(S-nums[0]);

for (let i=1; i<N-1; i++)
    arr[i] = get_gcd(get_abs(S-nums[i]), arr[i-1]);

console.log(get_prime(arr[N-2]).join(" "));

function get_prime(a)
{
	let lst = [a];

    for (let i=2; i<=a/2; i++)
    {
        if (a % i == 0)
		{
			let tmp = (a / i).toFixed(0);
			if (lst.indexOf(i) == -1)
				lst.push(i);
		}
    }
	return (lst.sort((x, y) => x-y));
}

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