let [[N, S], bros] = require('fs')
.readFileSync(0)
.toString()
.trim()
.split("\n")
.map(el =>el.split(" ").map(Number));

bros.map(el => el > S ? el - S : S - el);

function gcd(a, b) {
	while (b !== 0) {
		let temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

const seekGcd = (arr) => {
	return arr.reduce((acc, cur) => gcd(acc, cur), arr[0])
}

console.log(seekGcd(bros));
