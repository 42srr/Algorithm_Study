let [arr] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
	.map((e)=>e.split("").map(Number));

arr.sort((a, b)=>b-a);

console.log(arr.join(""));