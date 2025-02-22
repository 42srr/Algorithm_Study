let [N, data] = require("fs")
    .readFileSync(0)
    .toString()
    .split("\n")
    .map(v => v.split(" ").map(Number));

N = Number(N);
let res = Array(N).fill(-1);
let stack = [];

for (let i = N - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= data[i])
        stack.pop();
    if (stack.length > 0)
        res[i] = stack[stack.length - 1];
    stack.push(data[i]);
}
console.log(res.join(" "));