let N = Number(require("fs").readFileSync(0).toString());

back(0, 0, Array(N).fill(0));

function back(cnt, idx, arr)
{
	if (cnt == N)
	{
		console.log(arr.join(" "));
		return ;
	}
	for (let i=0; i<N; i++)
	{
        if (arr.indexOf(i+1) != -1)
            continue;
		arr[cnt] = i+1;
		back(cnt+1, i+1, arr);
        arr[cnt] = 0;
	}
}