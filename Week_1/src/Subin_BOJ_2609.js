let input = require("fs").readFileSync(0).toString().split(" ");

let [a, b] = input.map(Number);

let c = get_gcd(a, b)

console.log(c);
console.log(a * b / c);

function get_gcd(a, b)
{
	let r = 1;

	while (r > 0)
	{
		if (a / b == 0)
			return -1;
		r = a % b;
		a = b;
		b = r;
	}
	return a;
}
