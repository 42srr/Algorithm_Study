let [[N, K], ...[arr]] = require("fs")
    .readFileSync(0)
    .toString()
    .split("\n")
    .map((e)=> e.split(" ").length == 2 ? e.split(" ").map(Number) : e.split("").map(Number));

// 처음 최댓값의 인덱스를 본다.
// 버려야 하는 수 < 인덱스이면, 최댓값 앞쪽에서만 계산한다.
// 버려야 하는 수 >= 인덱스이면, 최댓값 앞쪽은 다 버리고, 최댓값 이후부터 본다.

let idx = -1;

for (let i=0; i<N; i++)
    if (idx == -1 ? idx : arr[idx] < arr[i])
        idx = i;

let lt = 0;
let rt = arr.length - 1;

if (K >= idx+1)
{
    lt = idx;
    K -= idx;
}

// 왼쪽부터 a에 넣는다.
// 넣으려는 숫자가 a의 마지막보다 크다면, a의 마지막을 버리고 넣는다.
// 이 짓이 K번이 될 때까지 반복한다.
let stack = [];

for (let i=lt; i<N; i++)
{
    while (K > 0 && stack.length > 0 && stack[stack.length-1] < arr[i])
    {
        stack.pop();
        K--;
    }
    stack.push(arr[i]);
}

console.log(stack.join(""));
