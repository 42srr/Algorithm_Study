let [N, ...data] = require("fs")
	.readFileSync(0)
	.toString()
	.trim()
	.split("\n");

let res = [];

for (let i=0; i<N; i++)
	res.push(check(data[i]));

console.log(res.join("\n"));

function check(arr)
{
	let stack = [];

	for (let i=arr.length-1; i>=0; i--)
	{
		if (arr[i] == ")")
			stack.push(arr[i]);
		else if (arr[i] == "(")
		{
			if (stack.length == 0)
				return ("NO");
				stack.pop();
		}
	}
	if (stack.length != 0)
		return ("NO");
	else
		return ("YES");
}