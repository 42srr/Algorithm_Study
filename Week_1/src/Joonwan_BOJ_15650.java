import java.io.*;
import java.util.StringTokenizer;

public class Joonwan_BOJ_15650 {

	private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static int n;
	private static int m;
	private static int[] nums;
	private static int[] res;

	public static void main(String[] args) throws IOException {
		
		StringTokenizer st = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());

		nums = new int[n];
		res = new int[m];

		for (int i = 0; i < n; i++) {
			nums[i] = i + 1;
		}

		for (int i = 0; i < n; i++) {
			recursive(0, i);
		}
	}

	private static void recursive(int depth, int nowIndex) {

		res[depth] = nums[nowIndex];

		if (depth + 1 == m) {
			printResult(res);
			return ;
		}

		for (int i = nowIndex + 1; i < n; i++) {
			recursive(depth + 1, i);
		}
	}

	private static void printResult(int[] res) {


		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < m; i++) {
			sb.append(res[i] + " ");
		}

		System.out.println(sb);
	}
}
