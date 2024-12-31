import java.io.*;

public class Gihong_BOJ_6588 {
	static boolean[] is_prim = new boolean[1000001];

	static void get_isprim() {
		for (int i = 2; i <= 1000000; i++) // 1백만 회
			is_prim[i] = true;

		for (int x = 2; x <= 1000000; x++) { // 6백만 회
			for (int y = 2; y * x <= 1000000; y++)
				is_prim[x * y] = false;
		}
	}

	static void solve(int val) {
		for (int i = 3; i <= val / 2; i++) { // 이 for 문은 O(val)
			if (!(is_prim[i] && is_prim[val - i])) // 이 if 문은 O(1)
				continue;
			System.out.println(val + " = " + i + " + " + (val - i));
			return;
		}
		System.out.println("Goldbach's conjecture is wrong.");
	}

	public static void main(String[] args) throws IOException {
		get_isprim();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		while (true) {
			int val = Integer.parseInt(br.readLine());
			if (val == 0)
				break;
			solve(val);
		}
	}
}
