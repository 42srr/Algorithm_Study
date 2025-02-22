let [N, ...nums] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let stack = [];
let res = [];
let num = 1;

for (let i = 0; i < N; i++) {
    const target = nums[i];

    if (num <= target) {
        while (num <= target) {
            stack.push(num++);
            res.push("+");
        }
        stack.pop();
        res.push("-");
    } else {
        if (stack[stack.length - 1] === target) {
            stack.pop();
            res.push("-");
        } else {
            console.log("NO");
            return;
        }
    }
}

console.log(res.join("\n"));