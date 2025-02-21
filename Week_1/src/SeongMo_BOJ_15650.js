const [N, M] = require('fs').readFileSync(0).toString().trim().split(" ").map(Number);
let ans = [];

function getSequence(temp, min, cnt){
	if (cnt === M) {
		ans.push(temp.join(" "));
		return;
	}
	for (let i = 1; i <= N; i++)
	{
		if (!temp.includes(i) && min < i)
			getSequence([...temp, i], i, cnt + 1);
	}
}

getSequence([], 0, 0);
console.log(ans.join('\n'));
