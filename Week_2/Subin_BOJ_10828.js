let [N, ...data] = require("fs")
	.readFileSync(0)
	.toString()
	.split("\n")
	.map(data => data.split(" ").length > 1 ? data.split(" ") : [data]);

let arr = [];
let res = [];

for (let i=0; i<N; i++)
{
	if (data[i][0] == "push")
		push(arr, data[i][1]);
	else if (data[i][0] == "pop")
		res.push(pop(arr));
	else if (data[i][0] == "size")
		res.push(size(arr));
	else if (data[i][0] == "empty")
		res.push(empty(arr));
	else if (data[i][0] == "top")
		res.push(top(arr));
}

console.log(res.join("\n"));

function push(arr, data)
{
	arr.push(data);
}
function pop(arr)
{
	if (empty(arr))
		return (-1);
	else
		return (arr.pop());
}
function size(arr)
{
	return (arr.length);
}

function empty(arr)
{
	if (size(arr) == 0)
		return (1);
	else
		return (0);
}
function top(arr)
{
	if (empty(arr))
		return (-1);
	else
		return (arr[size(arr)-1]);
}
