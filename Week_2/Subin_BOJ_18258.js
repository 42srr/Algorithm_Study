let [N, ...data] = require("fs")
	.readFileSync(0)
	.toString()
	.split("\n");

N = Number(N);
data = data.map(data => data.split(" ").length > 1 ? data.split(" ") : [data]);

let arr = [];
let res = [];
let idx = 0;

for (let i=0; i<N; i++)
{
	if (data[i][0] == "push")
		push(data[i][1]);
	else if (data[i][0] == "pop")
		res.push(pop());
	else if (data[i][0] == "size")
		res.push(size());
	else if (data[i][0] == "empty")
		res.push(empty());
	else if (data[i][0] == "front")
		res.push(front());
	else if (data[i][0] == "back")
		res.push(back());
}

console.log(res.join("\n"));

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