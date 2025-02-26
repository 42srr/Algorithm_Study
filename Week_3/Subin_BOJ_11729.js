let [N] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let cnt = 0;
let result = [];

hanoi(N, 1, 2, 3);

console.log(cnt);
console.log(result.join("\n"));

/*
n-1개의 원반을 from->tmp으로 옮김
가장 큰 원반 n을 from->to으로 옮김
tmp에 있는 n-1개의 원반을 tmp->to으로 옮김
*/
function hanoi(n, from, tmp, to)
{
    if (n == 1)
        result.push(from + " " + to);
    else
    {
        hanoi(n-1, from, to, tmp);
        result.push(from + " " + to);
        hanoi(n-1, tmp, from, to);
    }
    cnt++;
}
