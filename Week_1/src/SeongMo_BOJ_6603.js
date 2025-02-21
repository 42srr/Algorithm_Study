const input = require("fs").readFileSync(0).toString().trim().split("\n").map(v => v.split(" ").map(Number));

function getComb(arr, temp, ans, len, i) {
	if (len === 6 && !ans.includes(temp.join(" ")))	{
			ans.push(temp.join(" "));
		return ;
	}
	while (arr[i]){
		if (!temp.includes(arr[i]))
			getComb(arr, [...temp, arr[i]], ans, len + 1, i + 1);
		i++;
	}
}

let i = 0;
while (input[i][0] != 0) {
	let ans = [];
	getComb(input[i], [], ans, 0, 1);
	console.log(ans.join("\n"));
    if (input[i + 1][0] != 0)
    	console.log();
	i++;
}
