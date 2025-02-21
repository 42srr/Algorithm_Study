let n = Number(require("fs").readFileSync(0).toString().trim());
let sum = 0;

while (n > 0)
	sum += n--;

console.log(sum);
