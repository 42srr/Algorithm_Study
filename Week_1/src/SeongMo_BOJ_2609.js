const [a, b] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

let gcd = 1;
let i = 2;
while (i <= a && i <= b)
{
	if (a % i == 0 && b % i == 0)
		gcd = i;
	i++;
}

console.log(gcd);
console.log((a * b) / gcd);
