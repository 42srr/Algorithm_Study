import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Joonwan_BOJ_1929 {

	private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

	public static void main(String[] args) throws IOException {

		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());

		boolean[] isPrime = new boolean[m + 1];

		initPrime(isPrime);

		for (int i = n; i <= m; i++ ){
			if (isPrime[i]) {
				bw.write(i + "\n");
			}
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
