import java.io.*;
import java.util.Arrays;

public class Joonwan_BOJ_6588 {

	private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int MAX = 1_000_000;
	private static boolean[] isPrime = new boolean[MAX + 1];
	private static String EOF = "0";

	public static void main(String[] agrs) throws IOException {
		
		initPrimeNumber();

		while (true) {
			
			String input = br.readLine();
			if (input.equals(EOF)) {
				break;
			}
			 
			int number = Integer.parseInt(input);
			sol(number);
		}

		bw.flush();
		bw.close();
		br.close();
	}

	private static void sol(int number) throws IOException{

		boolean  flag = false;
		for (int i = 3; i <= number / 2; i++) {
			if (isPrime[i] && isPrime[number - i]) {
				bw.write(number + " = " +  i + " + " + (number - i) + "\n");
				flag = true;
				break;
			}
		}

		if (!flag) {
			bw.write("Goldbach's conjecture is wrong.\n");
		}
	}

	private static void initPrimeNumber() {

		Arrays.fill(isPrime, true);
		
		for (int i = 2; i < MAX + 1; i++) {
			if (isPrime[i]) {
				for (int j = i * 2; j < MAX +1; j+=i) {
					isPrime[j] = false;
				}
			}
		}
	}
}
