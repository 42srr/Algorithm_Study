let [N, ...arr] = require("fs")
.readFileSync(0)
.toString()
.split("\n")
.map(Number);

let abs_heap = [];
let result = [];

for (let i=0; i<N; i++)
{
	if (arr[i] != 0)
		insert(arr[i]);
	else
		result.push(remove());
}

console.log(result.join("\n"));

function insert(num)
{
	abs_heap.push(num);
	
	let child = abs_heap.length - 1;
	while (child > 0)
	{
		const parent = Math.floor((child-1)/2);
		if ((abs(abs_heap[parent]) < abs(abs_heap[child])) 
            || ((abs_heap[parent] < abs_heap[child]) 
                && (abs(abs_heap[parent]) == abs(abs_heap[child]))))
            break;
		[abs_heap[parent], abs_heap[child]] = [abs_heap[child], abs_heap[parent]];
		child = parent;
	}
}

function remove()
{
	if (abs_heap.length == 0)
		return (0);
	if (abs_heap.length == 1)
		return (abs_heap.pop());
    [abs_heap[0], abs_heap[abs_heap.length-1]] = [abs_heap[abs_heap.length-1], abs_heap[0]];
	let parent = 0;
	let left = parent*2+1;
	let right = parent*2+2; 
    let result = abs_heap.pop();
    
	while (left <= abs_heap.length - 1)
	{
		const min = right <= abs_heap.length - 1 
            && ((abs(abs_heap[left]) > abs(abs_heap[right])) 
                 || ((abs(abs_heap[left]) == abs(abs_heap[right])) 
                     && (abs_heap[left] > abs_heap[right]))) ? right : left;
	
		if ((abs(abs_heap[parent]) < abs(abs_heap[min])) 
            || ((abs_heap[parent] < abs_heap[min]) 
                && (abs(abs_heap[parent]) == abs(abs_heap[min]))))
            break;
		[abs_heap[parent], abs_heap[min]] = [abs_heap[min], abs_heap[parent]];
		parent = min;
		left = parent*2+1;
		right = parent*2+2;
	}
	return (result);
}

function abs(num)
{
    return (num >= 0 ? num : -num);
}