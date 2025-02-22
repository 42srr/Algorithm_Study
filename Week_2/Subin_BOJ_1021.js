let [[N, M], data] = require("fs")
	.readFileSync(0)
	.toString()
	.split("\n")
	.map(v => v.split(" ").map(Number));

let arr1 = [];
let arr2 = Array(N).fill().map((_, index) => index + 1);
let idx1 = idx2 = cnt = 0;

for (let i=0; i<M; i++)
{
	let [left, right] = [get_left(data[i]), get_right(data[i])+1];

	if (left < right)
	{
		cnt += left;
		while (left--)
			push_back(pop_front());
		pop_front();
	}
	else
	{
		cnt += ++right;
		while (right--)
			push_front(pop_back());
		pop_front();
	}
    // console.log(`[${arr1.slice(idx1, arr1.length).reverse()} : ${arr2.slice(idx2, arr2.length)}]`);
}

console.log(cnt);

function get_left(data)
{
	let left = 0;

	for(let i=arr1.length-1; i>=idx1; i--)
	{
		if (data == arr1[i])
			return (left);
		left++;
	}

	for(let i=idx2; i<=arr2.length-1; i++)
	{
		if (data == arr2[i])
			return (left);
		left++;
	}
	return (-1);
}

function get_right(data)
{
	let right = 0;

	for(let i=arr2.length-1; i>=idx2; i--)
	{
		if (data == arr2[i])
			return (right);
		right++;
	}
	for(let i=idx1; i<=arr1.length-1; i++)
	{
		if (data == arr1[i])
			return (right);
		right++;
	}
	return (-1);
}

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
