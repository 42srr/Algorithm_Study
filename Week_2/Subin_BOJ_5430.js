let [T, ...data] = require("fs")
	.readFileSync(0)
	.toString()
	.split("\n");

let arr = [];
let lt = rt = 0;

for (let t = 0; t < Number(T)*3; t+=3)
{
    let error = 0;
    let reverse = 0;
	let func = data[t].split("");
	let n = Number(data[t + 1]);
	
	arr = n == 0 ? [] : data[t + 2].slice(1, data[t + 2].length - 1).split(",");
    lt = 0;
    rt = arr.length;

	for (let i = 0; i < func.length && error == 0; i++)
	{
		if (func[i] == "R")
			reverse = R(reverse);
		else if (func[i] == "D")
			error = D(reverse);
	}

	console.log(error ? "error" : `[${reverse ? arr.slice(lt,rt).reverse().join(",") : arr.slice(lt,rt).join(",")}]`);
}

function R(reverse)
{
    return (!reverse);
}

function D(reverse)
{
    let error = 0;
	if (lt - rt == 0)
        error = 1;
    else if (reverse)
        rt-=1;
    else
        lt+=1;
	return (error);
}