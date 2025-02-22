let input = require("fs").readFileSync(0).toString().split(" ");
let [N, M] = input.map(Number);

back(0, Array(M).fill(0));

function back(cnt, arr)
{
	if (cnt == M)
	{
		console.log(arr.join(" "));
		return ;
	}
	for (let i=1; i<=N; i++)
	{
        if (arr.indexOf(i) != -1)
            continue;
		arr[cnt] = i;
		back(cnt+1, arr);
        arr[cnt] = 0;
	}
}