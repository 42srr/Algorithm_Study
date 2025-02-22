let [N, ...data] = require("fs")
	.readFileSync(0)
	.toString()
	.split("\n");

N = Number(N);
data = data.map(data => data.split(" ").length > 1 ? data.split(" ") : [data]);

let arr = [];
let idx = 0;

for (let i = 0; i < N; i++)
    push(i + 1);

while (size() > 1)
{
    pop();
    push(pop());
}

console.log(arr[N-1]);

function push(data)
{
	arr.push(data);
}
function pop()
{
	return (empty() ? -1 : arr[idx++]);
}
function size()
{
    return (arr.length - idx);
}
function empty()
{
    return (size() === 0 ? 1 : 0);
}
function front()
{
	return (empty() ? -1 : arr[idx]);
}
function back()
{
    return (empty() ? -1 : arr[arr.length - 1]);
}