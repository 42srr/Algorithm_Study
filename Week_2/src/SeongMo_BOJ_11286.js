const [N, ...commands] = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n');

let ans = [];

class AbsHeap {
	constructor() {
		this.heap = [];
	}

	add(value) {
		let num = value[0] != '-' ? Number(value) : -Number(value.slice(1));
		this.heap.push(num);
		this.bubbleUp();
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

	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}

	bubbleUp() {
		let index = this.heap.length - 1;
		let parentIdx = Math.floor((index - 1) / 2);
		while (
			this.heap[parentIdx] &&
			Math.abs(this.heap[index]) <=  Math.abs(this.heap[parentIdx])
		){
			if (Math.abs(this.heap[index]) === Math.abs(this.heap[parentIdx]) && this.heap[index] > this.heap[parentIdx])
				return ;
			this.swap(index, parentIdx);
			index = parentIdx;
			parentIdx = Math.floor((index - 1) / 2);
		}
	}

	bubbleDown() {
		let index = 0;
		let leftIdx = index * 2 + 1;
		let rightIdx = index * 2 + 2;

		while (true) {
			let smallestIdx = index;

			if (this.heap[leftIdx] &&
				(Math.abs(this.heap[leftIdx]) < Math.abs(this.heap[smallestIdx]) ||
				(Math.abs(this.heap[leftIdx]) === Math.abs(this.heap[smallestIdx]) && this.heap[leftIdx] < this.heap[smallestIdx]))) {
				smallestIdx = leftIdx;
			}
			if (this.heap[rightIdx] &&
				(Math.abs(this.heap[rightIdx]) < Math.abs(this.heap[smallestIdx]) ||
				(Math.abs(this.heap[rightIdx]) === Math.abs(this.heap[smallestIdx]) && this.heap[rightIdx] < this.heap[smallestIdx]))) {
				smallestIdx = rightIdx;
			}
			if (smallestIdx === index) {
				break ;
			}

			this.swap(index, smallestIdx);
			index = smallestIdx;
			leftIdx = index * 2 + 1;
			rightIdx = index * 2 + 2;
		}
	}
}

let absHeap = new AbsHeap();

for (let i = 0; i < Number(N); i++) {
	if (commands[i] != 0){
		absHeap.add(commands[i]);
	}
	else {
		if (absHeap.heap.length === 0)
			ans.push(0);
		else{
			ans.push(absHeap.poll());
		}
	}
}

console.log(ans.join('\n'));
