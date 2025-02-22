const [N, ...info] = require("fs")
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map(Number);

let ans = [];

class MinHeap {
	constructor(){
		this.heap = [];
	}

	add(value) {
		this.heap.push(value);
		this.bubbleUp();
	}

	swap(idx1, idx2){
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}

	poll() {
		if (this.heap.length === 1) {
			return this.heap.pop();
		}

		const value = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown();
		return value;
	}

	bubbleUp() {
		let index = this.heap.length - 1;
		let parentIdx = Math.floor((index - 1) / 2);
		while (
			this.heap[parentIdx] &&
			this.heap[index] < this.heap[parentIdx]
		){
			this.swap(index, parentIdx);
			index = parentIdx;
			parentIdx = Math.floor((index - 1) / 2);
		}
	}

	bubbleDown() {
		let index = 0;
		let leftIdx = index * 2 + 1;
		let rightIdx = index * 2 + 2;

		while (
			(this.heap[leftIdx] && this.heap[leftIdx] < this.heap[index]) ||
			(this.heap[rightIdx] && this.heap[rightIdx] < this.heap[index])
		) {
			let smallerIdx =
			this.heap[rightIdx] && this.heap[rightIdx] < this.heap[leftIdx]
			? rightIdx : leftIdx;

			this.swap(index, smallerIdx);
			index = smallerIdx;
			leftIdx = index * 2 + 1;
			rightIdx = index * 2 + 2;
		}
	}
}

let minHeap = new MinHeap();

for (let i = 0; i < N; i++){
	if (info[i] != 0){
		minHeap.add(info[i]);
	}
	else {
		if (minHeap.heap.length === 0)
			ans.push(0);
		else{
			ans.push(minHeap.poll());
		}
	}
}
console.log(ans.join('\n'));
