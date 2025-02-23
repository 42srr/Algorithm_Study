let [N, ...arr] = require("fs")
.readFileSync(0)
.toString()
.split("\n")
.map(Number);

let min_heap = [];
let result = [];

for (let i=0; i<N; i++)
{
	if (arr[i] > 0)
		insert(arr[i]);
	else
		result.push(remove());
}

console.log(result.join("\n"));

function insert(num)
{
	min_heap.push(num);
	
	let child = min_heap.length - 1;
	while (child > 0)
	{
		const parent = Math.floor((child-1)/2);
		if (min_heap[parent] <= min_heap[child])
			break;
		[min_heap[parent], min_heap[child]] = [min_heap[child], min_heap[parent]];
		child = parent;
	}
}

function remove()
{
	if (min_heap.length == 0)
		return (0);
	if (min_heap.length == 1)
		return (min_heap.pop());
    [min_heap[0], min_heap[min_heap.length-1]] = [min_heap[min_heap.length-1], min_heap[0]];
	let parent = 0;
	let left = parent*2+1;
	let right = parent*2+2; 
    let result = min_heap.pop();
    
	while (left <= min_heap.length - 1)
	{
		const min = right <= min_heap.length - 1 && min_heap[left] > min_heap[right] ? right : left;
	
		if (min_heap[parent] <= min_heap[min])
			break;
		[min_heap[parent], min_heap[min]] = [min_heap[min], min_heap[parent]];
		parent = min;
		left = parent*2+1;
		right = parent*2+2;
	}
	return (result);
}