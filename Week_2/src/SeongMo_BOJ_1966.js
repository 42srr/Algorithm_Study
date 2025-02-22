const [T, ...nums] = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map(el => el.split(' ').map(Number));

let ans = [];

function priorityCheck(queue){
	let priority = queue[0][1];
	for (let i = 1; i < queue.length; i++){
		if (priority < queue[i][1])
			return 0;
	}
	return 1;
}


for (let i = 0; i < T * 2; i += 2){
	let [N, M] = nums[i];
	let priorityInfo = nums[i + 1];
	let queue = Array(N).fill().map((_, index) =>
	([index, priorityInfo[index]]));
	let cnt = 1;
	while (queue){
		let Print = priorityCheck(queue);
		if (Print){
			if (queue.shift()[0] === M)
				break;
			cnt++;
		}
		else{
			queue.push(queue.shift());
		}
	}
	ans.push(cnt);
}
console.log(ans.join("\n"));
