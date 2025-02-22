// N <= 500,000
const N = Number(require("fs")
.readFileSync(0)
.toString()
.trim());

let arr = Array(N).fill().map((_, index) => index + 1);

function solve(arr){
	while (true){
		let front = 0;
		let temp = [];
		if (arr.length === 1){
			console.log(arr[0]);
			return ;
		}
		while (front < arr.length){
			front++;
			if (front === arr.length)
			{
				temp.push(temp.shift());
				front++;
			}
			else
				temp.push(arr[front++]);
		}
		arr = temp;
	}
}

solve(arr);
