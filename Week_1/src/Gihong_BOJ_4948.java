import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

// 1929 문제 알고리즘 상당부분 복붙함
public class Gihong_BOJ_4948 {
	public static void main(String[] args) throws IOException {

		int[] isPrime = new int[1000001];
		for (int i = 2; i <= 1000000; i++)
			isPrime[i] = 1;

		for (int x = 1; x <= 1000000; x++) {
			for (int y = 1; y <= 1000000; y++) {
				int val = x * y;
				if (x == 1 || y == 1)
					continue;
				if (val > 1000000)
					break;
				isPrime[val] = 0;
			}
		}

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		while (true) {
			int N = Integer.parseInt(br.readLine());
			if (N == 0)
				break;
			int ans = 0;
			for (int i = N + 1; i <= 2 * N; i++)
				ans += isPrime[i];
			System.out.println(ans);
		}
	}
}
