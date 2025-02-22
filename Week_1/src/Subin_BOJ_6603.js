let input = require("fs").readFileSync(0).toString().split("\n");

for (let e=0; e<input.length; e++)
{
	let nums = input[e].split(" ").map(Number);
	let k = nums[0];
	if (nums[0] == 0)
		return ;
	if (e != 0 && nums[0] != 0)
		console.log();

	nums = nums.slice(1);
	back(0, 0, "", nums, k);
}

function back(cnt, idx, str, nums, k)
{
	if (cnt == 6)
		console.log(str);
	else
		for (let i=idx; i<k; i++)
			if (cnt == 0)
				back(cnt+1, i+1, str+`${nums[i]}`, nums, k);
			else
				back(cnt+1, i+1, str+` ${nums[i]}`, nums, k);
}