import java.io.*;
import java.util.StringTokenizer;
import java.util.Arrays;

public class Joonwan_BOJ_15649 {

	private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int n;
	private static int m;

	public static void main(String[] args) throws IOException {

		StringTokenizer st = new StringTokenizer(br.readLine());

		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());

		int[] nums = new int[n];
		int[] result = new int[m];

		for (int i = 0; i < nums.length; i++) {
			nums[i] = i + 1;
		}

		
		for (int i = 0; i < n; i++) {
			recursive(nums, 0, result, i);
		}

		bw.flush();
		bw.close();
		br.close();
	}

	private static void recursive(int[] nums, int depth, int[] result, int start) throws IOException{

		result[depth] = nums[start];

		if (depth + 1 == m) {
			printResult(result);
			return ;
		}		
		for (int i = 0; i < nums.length; i++) {
			if (!contains(result, nums[i], depth))
				recursive(nums, depth + 1, result, i);
		}
	}

	private static boolean contains(int[] result, int now, int depth) {
		for (int i = 0 ; i <= depth; i++){
			if (result[i] == now) {
				return true;
			}
		}

		return false;
	}

	private static void printResult(int[] result) throws IOException{

		for (int i = 0; i < result.length; i++) {
			bw.write(result[i] + " ");
		}
		bw.write("\n");
	}
}
