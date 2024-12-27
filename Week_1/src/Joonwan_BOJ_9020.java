import java.io.*;
import java.util.Arrays;

public class Joonwan_BOJ_9020 {

	private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static int MAX = 10_000;
	private static boolean[] isPrime = new boolean[MAX + 1];

	public static void main(String[] agrs) throws IOException {
	
		initPrime();
		int min = 0;
		int max = 0;
		int n = Integer.parseInt(br.readLine());
		for (int j = 0; j < n; j++) {

			int number = Integer.parseInt(br.readLine());
			
			for (int i = 2; i <= number / 2; i++) {
				if (isPrime[i] && isPrime[number - i]) {
					min = i;
					max = number - i;
				}
			}
			System.out.println(min + " " + max);
		}
	}

	private static void initPrime() {

		Arrays.fill(isPrime, true);
		isPrime[1] = false;

		for (int i = 2; i < MAX + 1; i++) {
			if (isPrime[i]) {
				for (int j = i * 2; j < MAX + 1; j+= i) {
					isPrime[j] = false;
				}
			}
		}

	}
}
