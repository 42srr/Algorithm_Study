let [[N], ...arr] = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map((e, index)=>[index, ...e.split(" ")]);

arr.sort((a, b)=>{
    if (Number(a[1]) != Number(b[1]))
        return (Number(a[1]) - Number(b[1]));
    else
        return (a[0] - b[0]);
});

console.log(arr.map((e)=>[e[1], e[2]].join(" ")).join("\n"));