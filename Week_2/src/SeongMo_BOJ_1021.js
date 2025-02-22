const [[N, M], nums] = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map(el =>
	el.split(' ').map(Number)
);

let ans = 0;
let arr = Array(N).fill().map((_, index) => index + 1);
let len = N;

function leftCheck(arr, target) {
	let cnt = 1;
	let i = 1;
	while (arr[i] !== target){
		i++;
		cnt++;
	}
	return cnt;
}

function rightCheck(arr, target){
	let cnt = 1;
	let i = len - 1;
	while (arr[i] !== target){
		i--;
		cnt++;
	}
	return cnt;
}

function rotateLeft(arr, cnt){
	return arr.slice(cnt).concat(arr.slice(0, cnt));
}

function rotateRight(arr, cnt, len){
	return arr.slice(-cnt).concat(arr.slice(0, len - cnt));
}

for (let i = 0; i < M; i++){
	let cnt = 0;
	if (arr[0] === nums[i]){
		arr.shift();
		len--;
		continue;
	}
	// 방향 확인
	let left = leftCheck(arr, nums[i]);
	let right = rightCheck(arr, nums[i]);
	let direction = left < right ? 1 : 0;
	cnt += left < right ? left : right;
	// 회전
	if (direction === 1){
		arr = rotateLeft(arr, cnt);
	}
	else{
		arr = rotateRight(arr, cnt, len);
	}
	// 뽑아내기, N <= 50이라 shift() 써도 문제없을듯
	arr.shift();
	len--;
	ans += cnt;
}
console.log(ans)
