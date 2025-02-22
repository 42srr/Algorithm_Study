let [N, K] = require("fs")
    .readFileSync(0)
    .toString()
    .split(" ")
    .map(Number);
 
let	arr1 = [];
let arr2 = Array(N).fill().map((_, index) => index + 1);
let idx1 = idx2 = 0;
let res = [];

while (empty(arr1, idx1) == 0 || empty(arr2, idx2) == 0) {
    let leng = size(arr1, idx1) + size(arr2, idx2);

    leng = leng < K ? K - leng : K;
    for (let i = 0; i < leng - 1; i++) {
        push_back(pop_front());

        if (size(arr1, idx1) == 1)
            break;
    }
    res.push(pop_front());
}
console.log(`<${res.join(", ")}>`);

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