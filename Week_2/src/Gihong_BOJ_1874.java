import java.lang.StringBuilder;
import java.io.*;
import java.util.Stack;

public class Gihong_BOJ_1874 {
	static int N;
	static Stack<Integer> left = new Stack<>();
	static Stack<Integer> right = new Stack<>();
	static StringBuilder sb = new StringBuilder();

	public static boolean solve(int num) {
		/**
		 * 1. 스택이 비어있다면 -> push
		 * 2. 스택이 들어있다면 -> 2-0. top이 num 보다 작다면 push
		 * 	2-1. top이 num이라면 pop
		 * 	2-2. top이 num보다 크다면 -> NO
		 */
		while (true) {
			if (left.isEmpty()) {
				if (right.isEmpty())
					return false;
				left.push(right.pop());
				sb.append("+\n");
			}
			else if (left.peek() < num) {
				if (right.isEmpty())
					return false;
				left.push(right.pop());
				sb.append("+\n");
			}
			else if (left.peek() == num) {
				left.pop();
				sb.append("-\n");
				return true;
			}
			else { // if (left.peek() > num)
				return false;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		for (int i = N; i >= 1; i--) {
			right.push(i);
		}

		for (int i = 0; i < N; i++) {
			int num = Integer.parseInt(br.readLine());
			if (!solve(num)) {
				System.out.println("NO");
				return;
			}
		}
		System.out.print(sb.toString());
	}
}
