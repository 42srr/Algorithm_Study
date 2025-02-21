const [[N, S], nums] = require("fs").readFileSync(0).toString().trim().split("\n").map(v => v.split(" ").map(Number));
let cnt = 0;

function getSum(sum, temp, i) {
	if (temp.length > 0 && sum === S)
		cnt++;
	if (i === N)
		return ;
	for (let j = i; j < N; j++)
	{
		temp.push(nums[j]);
		getSum(sum + nums[j], temp, j + 1);
	}
}

getSum(0, [], 0);

console.log(cnt);


// function getSum(sum, temp, i) {
// 	if (temp.length > 0 && sum === S)
// 		cnt++;
// 	if (i === N)
// 		return ;
// 	for (let j = i; j < N; j++)
// 	{
// 		getSum(sum + nums[j], [...temp, nums[j]], j + 1);
// 	}
// }
///// 이러면 메모리는 덜쓰는데 시간은 오래걸림
