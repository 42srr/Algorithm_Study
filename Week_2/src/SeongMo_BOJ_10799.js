const input = require("fs")
.readFileSync(0)
.toString()
.trim();

let i = 0;
let ans = 0;
let cnt = 0;

while (input[i]){
	if (input[i] === '(' && input[i + 1] != ')'){
		cnt++;
		ans++;
	}
	if (input[i] === '(' && input[i + 1] === ')')
		ans += cnt;
	if (input[i] === ')' && input[i - 1] != '(')
		cnt--;
	i++;
}
console.log(ans);
