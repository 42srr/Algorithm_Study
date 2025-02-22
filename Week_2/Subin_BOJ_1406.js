let [arr, M, ...cmds] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n");

let a_stack = [...arr.split("")];
let b_stack = [];

for (let e of cmds) {
    let tmp = e.split(" ");

    if (tmp[0] === 'L') {
        if (a_stack.length > 0) {
            b_stack.push(a_stack.pop());
        }
    } else if (tmp[0] === 'D') {
        if (b_stack.length > 0) {
            a_stack.push(b_stack.pop());
        }
    } else if (tmp[0] === 'B') {
        if (a_stack.length > 0) {
            a_stack.pop();
        }
    } else if (tmp[0] === 'P') {
        a_stack.push(tmp[1]);
    }
}

console.log(a_stack.join("") + b_stack.reverse().join(""));
