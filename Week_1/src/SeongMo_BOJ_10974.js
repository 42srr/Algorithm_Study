const N = Number(require('fs').readFileSync(0).toString().trim());
let ans = [];

function getSequence(temp, cnt){
	if (cnt === N) {
		ans.push(temp.join(" "));
		return;
	}
	for (let i = 1; i <= N; i++)
	{
		if (!temp.includes(i))
			getSequence([...temp, i], cnt + 1);
	}
}

getSequence([], 0);
console.log(ans.join('\n'));
