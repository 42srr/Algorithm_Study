let [N, ...data] = require("fs")
	.readFileSync(0)
	.toString()
	.split("\n");

N = Number(N);
data = data.map(data => data.split(" ").length > 1 ? data.split(" ") : [data]);

let res = [];
let arr1 = [];
let arr2 = [];
let idx1 = 0;
let idx2 = 0;

for (let i=0; i<N; i++)
{
	if (data[i][0] == "push_front")
		push_front(data[i][1]);
	if (data[i][0] == "push_back")
		push_back(data[i][1]);
	else if (data[i][0] == "pop_front")
		res.push(pop_front());
	else if (data[i][0] == "pop_back")
		res.push(pop_back());
	else if (data[i][0] == "size")
		res.push(size(arr1, idx1) + size(arr2, idx2));
	else if (data[i][0] == "empty")
		res.push(empty(arr1, idx1) && empty(arr2, idx2));
	else if (data[i][0] == "front")
		res.push(front());
	else if (data[i][0] == "back")
		res.push(back());
}

console.log(res.join("\n"));

function push_front(data)
{
	if (idx2 == 0)
		arr1.push(data);
	else
		arr2[--idx2] = data;
}
function push_back(data)
{
	if (idx1 == 0)
		arr2.push(data);
	else
		arr1[--idx1] = data;
}
function pop_front()
{
	if (!empty(arr1, idx1))
		return(arr1.pop());
	else if (!empty(arr2, idx2))
		return(arr2[idx2++]);
	else
		return (-1);
}
function pop_back()
{
	if (!empty(arr2, idx2))
		return(arr2.pop());
	else if (!empty(arr1, idx1))
		return(arr1[idx1++]);
	else
		return (-1);
}
function size(arr, idx)
{
    return (arr.length - idx);
}
function empty(arr, idx)
{
    return (size(arr, idx) === 0 ? 1 : 0);
}
function front()
{
	if (!empty(arr1, idx1))
		return(arr1[arr1.length - 1]);
	else if (!empty(arr2, idx2))
		return(arr2[idx2]);
	else
		return (-1);
}
function back()
{
	if (!empty(arr2, idx2))
		return(arr2[arr2.length - 1]);
	else if (!empty(arr1, idx1))
		return(arr1[idx1]);
	else
		return (-1);
}