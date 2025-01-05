import java.io.*;
import java.util.Stack;

public class Gihong_BOJ_9012 {
	static Stack<Integer> s = new Stack<>();
	static int T;

	public static boolean get_ans(String str) {
		for (int j = 0; j < str.length(); j++) {
			if (str.charAt(j) == '(') {
				s.push(1);
			} else if (str.charAt(j) == ')') {
				if (s.isEmpty())
					return false;
				else
					s.pop();
			}
		}
		if (s.empty())
			return true;
		else
			return false;
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		T = Integer.parseInt(br.readLine());
		for (int i = 0; i < T; i++) {
			s.clear();
			if (get_ans(br.readLine()))
				System.out.println("YES");
			else
				System.out.println("NO");
		}
	}
}
