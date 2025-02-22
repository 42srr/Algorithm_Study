let [N, towers] = require("fs")
    .readFileSync(0)
    .toString()
    .split("\n")
    .map(v => v.split(" ").map(Number));

N = Number(N);
let laser = Array(N).fill(0);
let stack = [];

for (let i = 0; i < N; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] < towers[i])
        stack.pop();
    if (stack.length > 0)
        laser[i] = stack[stack.length - 1][1];
    stack.push([towers[i], i + 1]);
}

console.log(laser.join(" "));