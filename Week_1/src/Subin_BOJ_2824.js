let [N, nums1, M, nums2] = require("fs").readFileSync(0).toString().split("\n").map(v => v.split(" ").map(Number));
let mode = false;
let res = BigInt(1);
const limit = BigInt(1000000000);

for (let i=0; i<N; i++)
	for (let j=0; j<M; j++)
        {
            let gcd = get_gcd(nums1[i], nums2[j]);

            if (gcd == 1)
                continue;
    		res = res * BigInt(gcd);
			if (res / limit > 0)
				mode = true;
            res = res % limit;
            nums1[i] = nums1[i] / gcd;
            nums2[j] = nums2[j] / gcd;
        }

res = res.toString();
if (res.length > 9)
    console.log(res.slice(res.length-9, res.length));
else if (mode)
    console.log('0'.repeat(9-res.length) + res);
else
	console.log(res);

function get_gcd(a, b)
{
	let r = 1;

	while (r > 0)
	{
		if (a / b == 0)
			return 1;
		r = a % b;
		a = b;
		b = r;
	}
	return a;
}