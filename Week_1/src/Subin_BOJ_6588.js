let input = require("fs").readFileSync(0).toString().split("\n").map(Number);

const limit = 1000000;
let str = "";
let arr = Array(limit+1).fill(true);
arr[0] = arr[1] = false;

for (let i=2; i<=limit/2; i++)
{
    if (!arr[i])
        continue;
    for (let j=2; i*j<=limit; j++)
        arr[i*j] = false;
}

for (let i=0; i<input.length; i++)
{
	let n = input[i];
    let check = false;

    if (n == 0)
        break;
    if (i != 0)
        str += "\n";
    if (n % 2 == 0 && n > 4)
    {
    	for (let j=2; j<=n; j++)
        {
    	    if (arr[j] && arr[n-j])
    		{
                str += `${n-j+j} = ${j} + ${n-j}`;
                check = true;
    			break;
    		}
        }
    }
    if (!check)
        str += `Goldbach's conjecture is wrong.`;
}

console.log(str);