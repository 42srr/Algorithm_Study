let [T, ...data] = require("fs")
    .readFileSync(0)
    .toString()
    .split("\n")
    .map((e)=> e.split(" ").map(Number));

let arr1 = arr2 = [];
let idx1 = idx2 = cnt = 0;

for (let t = 0; t < T[0]*2; t += 2) {
	let [N, M] = data[t];    
	arr1 = [];
    arr2 = data[t+1].map((e, index)=> [index, e]);
    idx1 = idx2 = cnt = 0;

    while (empty(arr1, idx1) == 0 || empty(arr2, idx2) == 0) {
		if (get_biggest(front()) == 0) {
			cnt++;
			if (pop_front()[0] == M)
				break;
		}
		else {
			push_back(pop_front());
		}
    }
    console.log(cnt);
}

function get_biggest(data)
{
	for(let i=arr1.length-1; i>=idx1; i--)
	{
		if (data[1] < arr1[i][1])
			return (1);
	}

	for(let i=idx2; i<=arr2.length-1; i++)
	{
        if (data[1] < arr2[i][1])
            return (1);
	}
	return (0);
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