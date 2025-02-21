const input = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);
const T = input[0];
const limit = 10000;
let ans = [];

let isPrime = Array(limit + 1).fill(true);
isPrime[0] = isPrime[1] = false;
for (let i = 2; i * i <= limit; i++) {
	if (isPrime[i])
		for (j = i * i; j <= limit; j += i)
			isPrime[j] = false
}

function findSet(n) {
	let temp = [];
	for (let i = n / 2; i <= limit; i++)
	{
		if (isPrime[i]){
			for (let j = 1; i + j <= n; j++)
			{
				if (isPrime[j])
				{
					if (i + j == n)
					{
						if (i <= j)
							temp.push(i, j);
						else
							temp.push(j, i);
						return (ans.push(temp.join(" ")));
					}

				}
			}
		}
	}
}

for (let i = 1; i <= T; i++){
	findSet(input[i]);
}

console.log(ans.join("\n"));


// 만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.
