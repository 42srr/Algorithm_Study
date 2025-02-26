let [N] = require("fs")
    .readFileSync(0)
    .toString()
    .split(" ")
    .map(Number);

console.log(fibonacci(N));

function fibonacci(N) {
  const F = new Array(21).fill(0);
  F[1] = 1;

  for (let i = 2; i <= N; i++) {
    F[i] = F[i - 1] + F[i - 2];
  }

  return F[N];
}