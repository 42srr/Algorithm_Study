import java.io.*;
import java.math.BigInteger;

public class Gihong_BOJ_2824 {

	public static BigInteger euclidean(BigInteger A, BigInteger B) {
		BigInteger r = BigInteger.valueOf(-1);
		while (r != BigInteger.ZERO) {
			r = A.remainder(B);
			A = B;
			B = r;
		}
		return (A);
	}
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		String[] token1 = br.readLine().split(" ");
		int M = Integer.parseInt(br.readLine());
		String[] token2 = br.readLine().split(" ");
		BigInteger A = BigInteger.ONE;
		BigInteger B = BigInteger.ONE;
		for (int i = 0; i < N; i++)
			A = A.multiply(new BigInteger(token1[i]));
		for (int i = 0; i < M; i++)
			B = B.multiply(new BigInteger(token2[i]));
		BigInteger gcd = euclidean(A, B);
		String ans = gcd.toString();
		if (ans.length() > 9)
			ans = ans.substring(ans.length() - 9, ans.length());
		System.out.print(ans);
	}
}
