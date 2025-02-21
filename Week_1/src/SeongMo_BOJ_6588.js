const input = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);

const limit = Math.max(...input);

// prime 배열 따로 만들기
let primes = [];
let isPrime = Array(limit + 1).fill(true);
isPrime[0] = isPrime[1] = false;
for (let i = 2; i * i <= limit; i++) {
	// if (isPrime) 대신 !isPrime에 continue 사용하면서 primes 배열에도 같이 넣기
	if (!isPrime[i]){
		continue;
	}
	primes.push(i);
	for (let j = i * 2; j <= limit; j += i)
		isPrime[j] = false;
}

// javascript console 출력은 느리기 때문에 병합해서 한번만 출력하기
console.log(
	input.slice(0, -1).map(num => {
	  const low = primes.find(primeNum => isPrime[num - primeNum]);
	  if (low) {
		const high = num - low;
		return `${num} = ${low} + ${high}`;
	  }
	  return "Goldbach's conjecture is wrong.";
	}).join('\n')
  );
