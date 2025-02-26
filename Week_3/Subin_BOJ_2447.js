let [N] = require("fs")
    .readFileSync(0)
    .toString()
    .split("\n")
    .map(Number);

let maps = Array.from({ length: N }, () => Array(N).fill(' '));
merge(0, 0, N);
console.log(maps.map((e)=>e.join("")).join("\n"));

function write(x, y, n)
{
    for(let i=x; i<x+n; i++)
        for (let j=y; j<y+n; j++)
            if (i == x || i == x+n-1 || j == y || j == y+n-1)
                maps[i][j] = "*";
            else
                maps[i][j] = " ";
}

function merge(x, y, n)
{
    let n3 = Math.floor(n/3);

    if (n == 3)
    {
        write(x, y, n);
    }
    else
    {
        merge(x, y, n3);
        merge(x+n3, y, n3);
        merge(x+n3*2, y, n3);
        merge(x, y+n3, n3);
        // write(x+n3, y+n3, n3);
        merge(x+n3*2, y+n3, n3);
        merge(x, y+n3*2, n3);
        merge(x+n3, y+n3*2, n3);
        merge(x+n3*2, y+n3*2, n3);
    }
}