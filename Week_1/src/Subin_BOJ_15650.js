let [N, M] = require("fs").readFileSync(0).toString().split(" ").map(Number);

back(0, 0, Array(M).fill(0));

function back(cnt, idx, arr)
{
	if (cnt == M)
	{
		console.log(arr.join(" "));
		return ;
	}
	for (let i=idx; i<=N; i++)
	{
        if (arr.indexOf(i) != -1)
            continue;
		arr[cnt] = i;
		back(cnt+1, i+1, arr);
        arr[cnt] = 0;
	}
}