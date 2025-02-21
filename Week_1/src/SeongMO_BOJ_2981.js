const input = require("fs")
.readFileSync(0)
.toString()
.trim()
.split("\n")
.map(Number);

let min = Math.min(...input.slice(1));
const nums = input.slice(2, input[0] + 1).map(el => el - min);

function gcd(a, b) {
	while (b !== 0) {
		let temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

const seekGcd = (arr) => {
	return arr.reduce((acc, cur) => gcd(acc, cur), arr[0])
}

let	midBoss = seekGcd(nums);

function solve(num) {
	let ans = [];
	let i = 2;
	while (i <= num)
	{
		if (num % i === 0)
			ans.push(i);
		i++;
	}
	console.log(ans.join(" "));
}

solve(midBoss);


/*
알고보면 숨바꼭질이랑 느낌 비슷하게 또 최대공약수 구하는 문제였음
input[1]이 min이라는 이야기가 없었다는 점 주의
약수 구하는 함수도 좀 더 최적화 가능하긴 했을 듯
*/
