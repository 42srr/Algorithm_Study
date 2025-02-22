let [K, ...nums] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let arr = [];

for (let i=0; i<K; i++)
{
    if (nums[i] == 0)
    {
        if (arr.length == 0)
            continue;
        arr.pop();
    }
    else
    {
        arr.push(nums[i]);
    }
}

console.log(arr.reduce((acc, cur) => acc + cur, 0));