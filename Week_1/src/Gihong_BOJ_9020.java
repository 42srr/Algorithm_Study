import java.io.*;
import java.lang.Math;

public class Gihong_BOJ_9020 {
	static int[] A = new int[10001];
	static int[] B = new int[10001];
	static boolean[] is_prim = new boolean[10001];

	static void get_isprim() {
		for (int i = 2; i <= 10000; i++)
			is_prim[i] = true;

		for (int x = 2; x <= 10000; x++) {
			for (int y = 2; y * x <= 10000; y++)
				is_prim[x * y] = false;
		}
	}

	static void get_A_B() {
		for (int i = 0; i < 10001; i++) // 아직 계산 안한 A와 B 값은 -1로 초기화
			A[i] = B[i] = -1;

		for (int a = 2; a <= 10000; a++) {
			if (!is_prim[a])
				continue;
			for (int b = 2; a + b <= 10000; b++) {
				if (!is_prim[b])
					continue;
				int val = a + b;
				// val 에 맞는 A와 B를 이전에 한 번 구한 적이 있다면 두 소수의 차가 무엇이 더 적은지 비교
				if (A[val] != -1 && B[val] != -1) {
					if (Math.abs(A[val] - B[val]) < Math.abs(a - b))
						continue;
				}
				A[val] = a;
				B[val] = b;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		get_isprim();
		get_A_B();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++) {
			int val = Integer.parseInt(br.readLine());
			System.out.print(Math.min(A[val], B[val]));
			System.out.print(' ');
			System.out.println(Math.max(A[val], B[val]));
		}
	}
}
