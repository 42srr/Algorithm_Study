let [[[N, n]], ...[arr]] = require("fs")
    .readFileSync(0)
    .toString()
    .split("\n")
    .map((e)=> e.split(" ").map((k, index)=> [Number(k), index]));

let set = [...new Set(arr.map(e => e[0]))].sort((a, b) => a - b);

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return (-1);
}

let result = [];

for (let i = 0; i < N; i++) {
    let idx = binarySearch(set, arr[i][0]);
    result.push(idx);
}

console.log(result.join(" "));