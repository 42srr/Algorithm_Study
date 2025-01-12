import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

// (코테에서 1초는 약 1억회라고 가정)
// 시간복잡도: 1000000 + 1000000 * log1000000 = 7,000,000 O(NlogN)
// 더 잘 푼 풀이: 에라토스테네스의 체 O(Nlog(logN))
public class Gihong_BOJ_1929 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String token[] = br.readLine().split(" ");

		// 컨테이너는 아직 안 배웠으므로 Array.fill 은 안 쓰도록 하겠다.
		int[] isPrime = new int[1000001];
		for (int i = 2; i <= 1000000; i++)	// 1은 소수가 아니라고 한다;;
			isPrime[i] = 1;

		for (int x = 1; x <= 1000000; x++) { // 1000000회
			for (int y = 1; y <= 1000000; y++) { // x*y <= 1000000 즉 log1000000
				int val = x * y;	// int 로 선언해도 overflow 안 일어남
				if (x == 1 || y == 1)
					continue;
				if (val > 1000000)
					break;
				isPrime[val] = 0;
			}
		}

		int n = Integer.parseInt(token[0]);
		int m = Integer.parseInt(token[1]);
		for (int i = n; i <= m; i++) {
			if (isPrime[i] == 1)
				System.out.println(i);
		}
	}
}
