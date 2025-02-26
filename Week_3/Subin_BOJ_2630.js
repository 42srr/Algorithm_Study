let [N, ...map] = require("fs")
    .readFileSync(0)
    .toString()
    .split("\n")
    .map((e, index)=> index == 0 ? Number(e.trim()) : e.split(" ").map(Number));

// [0 ~ N][0 ~ N] 까지의 범위를 4등분 하는 것을 재귀하여 계산, 분할 정복

let cnt = [0, 0];

merge(0, 0, N);
console.log(cnt.join("\n"));

function merge(x, y, n)
{
    let nn = Math.floor(n/2);

    if (n == 0)
        return;
    else if (check(x, y, n))
        cnt[map[x][y]] += 1;
    else
    {
        merge(x, y, nn);
        merge(x+nn, y, nn);
        merge(x, y+nn, nn);
        merge(x+nn, y+nn, nn);
    }
}

function check(x, y, n)
{
    for (let i=x; i<x+n; i++)
        for(let j=y; j<y+n; j++)
            if (map[x][y] != map[i][j])
                return (false);
    return (true);
}