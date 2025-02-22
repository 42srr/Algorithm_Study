const [N, K] = require("fs")
.readFileSync(0)
.toString()
.trim()
.split(' ')
.map(Number);

let ans = new Set;
let start = -1;
let arr = Array(N).fill().map((_, index) => index + 1);

while (ans.size != N){
	start += K;
	while (start > arr.length - 1)
		start %= arr.length;
	if (!ans.has(arr[start]))
	{
		ans.add(arr[start]);
		arr.splice(start--, 1);
	}
}

console.log(`<${[...ans].join(', ')}>`);
