let pipe = require("fs")
    .readFileSync(0)
    .toString()
    .trim();

let a_stack = [...pipe.split("")];
let b_stack = [];
let chk = true;
let cnt = 0;

while (a_stack.length > 0) {
    let tmp = a_stack.pop();

    if (tmp == ')') {
        chk = true;
        b_stack.push(tmp);
    }
    else if (tmp == '(') {
        b_stack.pop();
        if (chk == true) {
            chk = false;
            cnt += b_stack.length;
        }
        else {
            cnt += 1;
        }
    }
}

console.log(cnt);