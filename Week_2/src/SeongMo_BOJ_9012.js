const input = require('fs')
.readFileSync(0)
.toString()
.trim()
.split('\n');

const T = input[0];

function validation (str) {
	let info = Array(str).fill(0);
	for (const c in str)
	{
		if (str[c] === '(')
			info[c] = 1;
		else
			info[c] = 2;
	}
    for (let i = info.length - 1; i >= 0; i--)
    {
            if (info[i] === 1)
            {
                let flag = false;
                for (let j = i + 1; j < info.length; j++)
                {
                    if (info[j] === 2)
                    {
                        info[i] = 0;
                        info[j] = 0;
                        flag = true;
                        break;
                    }
                }
                if (!flag)
                    return (-1);
            }
    }
    if (info.reduce((acc, now) => acc + now, info[0]) === 0)
        return 1;
}

let ans = [];
for (let i = 1; i <= T; i++) {
	ans.push(validation(input[i]) === 1 ? 'YES' : 'NO');
}
console.log(ans.join("\n"));
