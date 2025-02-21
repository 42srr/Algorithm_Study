const input = require("fs")
.readFileSync(0)
.toString()
.trim()
.split("\n")
.map(el =>
	el.split(" ").map(Number)
);

const [N, M] = [input[0][0], input[2][0]];
const [aNum, bNum] = [input[1], input[3]];

const nums = [mul(aNum), mul(bNum)];

function mul(arr) {
	let ret = BigInt(1);
	for (const num of arr) {
		ret *= BigInt(num);
	}
	return ret;
}

function gcd(a, b) {
	while (b !== BigInt(0)) {
		let temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

ans = gcd(nums[0], nums[1]);

if (ans < 1000000000)
	console.log(Number(ans));
else
	console.log(`${ans}`.slice(-9));


/*
BigInt로 날먹을 하려면 꼬박꼬박 다 바꿔줘야 한다.
*/
