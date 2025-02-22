let [N, str, ...nums] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n");

let arr = [];

for (let e of str.split(""))
{
    if (is_alpha(e) == 1)
    {
        let idx = e.charCodeAt() - "A".charCodeAt();
        arr.push(Number(nums[idx]));
    }
    else
    {
        let a = arr.pop();
        let b = arr.pop();

        if (e == '*')
            arr.push(a*b);
        else if (e == '+')
            arr.push(a+b);
        else if (e == '-')
            arr.push(b-a);
        else if (e == '/')
            arr.push(b/a);
    }
}

console.log(arr[0].toFixed(2));

function is_alpha(c)
{
    if (c >= 'A' && c <= 'Z')
        return (1);
    else
        return (0);
}