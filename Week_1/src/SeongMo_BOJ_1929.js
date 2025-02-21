const [M, N] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);
let ans = [];

function isPrime(n) {
	if (n <= 1)
		return false;
	if (n === 2)
		return true;
	if (n % 2 === 0)
		return false
	for (let i = 3; i <= Math.sqrt(n); i += 2) {
		if (n % i === 0)
			return false;
	}
	return true;
}

for (let i = M; i <= N; i++) {
	if (isPrime(i))
		ans.push(i);
}

console.log(ans.join('\n'));

/*
function sieveOfEratosthenes(limit) {
    let primes = Array(limit + 1).fill(true);  // true로 초기화
    primes[0] = primes[1] = false;  // 0과 1은 소수가 아님

    for (let i = 2; i * i <= limit; i++) {  // i의 제곱이 limit 이하일 때만 반복
        if (primes[i]) {
            for (let j = i * i; j <= limit; j += i) {
                primes[j] = false;  // i의 배수는 소수가 아님
            }
        }
    }

    let result = [];
    for (let i = 2; i <= limit; i++) {
        if (primes[i]) result.push(i);  // 소수만 결과 배열에 추가
    }

    return result;
}

console.log(sieveOfEratosthenes(30));  // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
*/
