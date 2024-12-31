import java.io.*;
import java.math.BigInteger;

public class Gihong_BOJ_2407 {

	public static BigInteger factorial(int n) {
		BigInteger ans = BigInteger.ONE;
		while (n != 0) {
			ans = ans.multiply(BigInteger.valueOf(n--));
		}
		return (ans);
	}
	public static void main (String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] token = br.readLine().split(" ");
		int n = Integer.parseInt(token[0]);
		int m = Integer.parseInt(token[1]);
		BigInteger ans = factorial(n).divide(factorial(n - m).multiply(factorial(m)));
		System.out.print(ans);
	}
}
