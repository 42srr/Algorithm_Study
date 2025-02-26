let arr = require("fs")
    .readFileSync(0)
    .toString()
    .split(" ")
    .map(Number);

let result = [];

while (JSON.stringify(arr) != JSON.stringify([1, 2, 3, 4, 5]))
{
    if (arr[0] > arr[1])
    {
        [arr[0], arr[1]] = [arr[1], arr[0]];
        result.push(arr.join(" "));
    }
    if (arr[1] > arr[2])
    {
        [arr[1], arr[2]] = [arr[2], arr[1]];
        result.push(arr.join(" "));
    }
    if (arr[2] > arr[3])
    {
        [arr[2], arr[3]] = [arr[3], arr[2]];
        result.push(arr.join(" "));
    }
    if (arr[3] > arr[4])
    {
        [arr[3], arr[4]] = [arr[4], arr[3]];
        result.push(arr.join(" "));
    }
}

console.log(result.join("\n"));