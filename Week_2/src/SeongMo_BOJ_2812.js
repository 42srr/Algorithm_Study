const [[N, K], str] = require("fs")
.readFileSync(0)
.toString()
.trim()
.split('\n')
.map((el, index) => index === 0 ? el.split(' ').map(Number) : el)
;

let ans = [];
let cnt = 0;

for (let i = 0; i < N; i++) {
	while (ans && ans[ans.length - 1] < str[i] && cnt < K){
		ans.pop();
		cnt++;
	}
	ans.push(str[i]);
	while (i === N - 1 && cnt < K) {
		ans.pop();
		cnt++;
	}
}

console.log(ans.join(''));
