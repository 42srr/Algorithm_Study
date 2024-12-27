import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Joonwan_BOJ_1978 {

	private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

	public static void main(String[] args) throws IOException {

		int n = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(br.readLine());
		int[] nums = new int[n];

		for (int i = 0 ; i < n; i++) {
			nums[i] = Integer.parseInt(st.nextToken());
		}

		boolean[] isPrime = new boolean[1001];

		initPrime(isPrime);
		int res = 0;

		for (int i = 0; i < n; i++ ){
			if (isPrime[nums[i]]) {
				res++;
			}
		}

		bw.write(res + "");

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
