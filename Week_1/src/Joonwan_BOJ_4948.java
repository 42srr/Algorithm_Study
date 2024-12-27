import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Joonwan_BOJ_4948 {

	private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int MAX = 123456;
	private static boolean[] isPrime = new boolean[MAX * 2 + 1];
	private static String EOF = "0";

	public static void main(String[] args) throws IOException {

		initPrime(isPrime);

		while (true) {
			String input = br.readLine();
			int count = 0;

			if (input.equals(EOF)) {
				break;
			}

			int n = Integer.parseInt(input);

			for (int i = n + 1; i <= 2 * n; i++) {
				if (isPrime[i]) {
					count++;
				}
			}

			bw.write(count +"\n");
		}

		br.close();
		bw.flush();
		bw.close();
	}

	private static void initPrime(boolean[] isPrime) {
		Arrays.fill(isPrime, true);
	
		isPrime[1] = false;
		for (int i = 2; i < isPrime.length; i++) {
			if (isPrime[i]) {
				for (int j = i * 2; j < isPrime.length; j += i) {
					isPrime[j] = false;
				}
			}
		}
	}
}
