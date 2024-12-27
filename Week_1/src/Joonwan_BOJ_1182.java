import java.io.*;
import java.util.StringTokenizer;
import java.util.Arrays;

public class Joonwan_BOJ_1182 {
	
	private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));	
	private static int[] nums;
	private static int[] res;
	private static int count;
	private static int s;
	private static int n;

	public static void main(String[] agrs) throws IOException {
		StringTokenizer st = new StringTokenizer(br.readLine());

		n = Integer.parseInt(st.nextToken());

		nums = new int[n];
		res = new int[n];
		
		s = Integer.parseInt(st.nextToken());
		st = new StringTokenizer(br.readLine());

		for (int i = 0; i < n; i ++) {
			nums[i] = Integer.parseInt(st.nextToken());
		}
		
		for (int i = 0; i < n; i++) {
			recursive(0, i);
		}

		System.out.println(count);

	}

	private static void recursive(int depth, int nowIndex) {
	
		res[depth] = nums[nowIndex];
			
		if (sum(depth) == s) {
			count++;
		}

		if (depth + 1 == n) {
			return ;
		}

		for (int i = nowIndex + 1; i < n; i++) {
			recursive(depth + 1, i);
		}

	}

	private static int sum(int depth) {
		int sum = 0;

		for (int i = 0 ; i <= depth; i++) {
			sum += res[i];
		}

		return sum;
	}
}
