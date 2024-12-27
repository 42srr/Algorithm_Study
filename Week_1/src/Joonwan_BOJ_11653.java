import java.io.*;

public class Joonwan_BOJ_11653 {

	private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

	public static void main(String[] args) throws IOException {
		int n = Integer.parseInt(br.readLine());

		recursive(n);
	}

	private static void recursive(int n) {
		
		if (n == 1) {
			return ;
		}

		int element = n;
		for (int i = 2; i <= n; i++) {
			if (n % i == 0) {
				element = i;
				break;
			}
		}

		System.out.println(element);
		recursive(n / element);
	}
}
