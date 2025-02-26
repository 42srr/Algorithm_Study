let [N, ...arr] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n");

arr.sort((a, b)=>{
    if (a.length != b.length)
        return (a.length - b.length);

    let a_sum = getSum(a);
    let b_sum = getSum(b);

    if (a_sum != b_sum)
        return (a_sum - b_sum);

    return (a.localeCompare(b));
});

console.log(arr.join("\n"))

function getSum(str)
{
    let sum = 0;

    for (let e of str.split(""))
        if (e >= '0' && e <= '9')
            sum += Number(e);
    return (sum);
}