import java.io.*;
import java.util.StringTokenizer;

public class Joonwan_BOJ_6603 {

	private static BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
	private static String EOF = "0";
	private static int  MAX_COUNT = 6;

	public static void main(String[] args) throws IOException {

		while (true) {
			
			String input = bf.readLine();
			
			if (input.equals(EOF)) {
				break;
			}

			sol(input);
			System.out.println();
		}
	}

	private static void sol(String input) {

		StringTokenizer st = new StringTokenizer(input);

		int size = Integer.parseInt(st.nextToken());
		int[] nums = new int[size];
		int[] result = new int[MAX_COUNT];

		for (int i = 0 ; i < size; i ++){
			nums[i] = Integer.parseInt(st.nextToken());	
		}

		for (int i = 0 ; i < size; i ++) {
			recursive(nums, 0, i, result);
		}
	}

	private static void recursive(int[] nums, int depth, int nowIndex, int[] result) {
		result[depth] = nums[nowIndex];

		if (depth + 1 == result.length) {
			printResult(result);
			return ;
		}

		for (int i = nowIndex + 1; i < nums.length; i++) {
			recursive(nums, depth + 1, i, result);
		}
	}

	private static void printResult(int[] result) {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < result.length; i++) {
			sb.append(result[i]).append(" ");
		}

		System.out.println(sb);
	}
}
