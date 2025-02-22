let input = require("fs").readFileSync(0).toString().split(" ");

const limit = 1000000;
let [m, n] = input.map(Number);
let arr = Array(limit + 1).fill(true);
[arr[0], arr[1]] = [false, false];

for (let i=2; i<=n/2; i++)
{
    if (!arr[i])
        continue;
    for (let j=2; i*j<=n; j++)
        arr[i*j] = false;
}

for (let i=m; i<=n; i++)
    if (arr[i])
        console.log(i);