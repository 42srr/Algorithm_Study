import java.io.*;
import java.util.Stack;

public class Gihong_BOJ_10799 {	// 스택 문제인줄 몰랐으면 스택으로 풀 수 있었을까?
	static Stack<Boolean> s = new Stack<>();
	public static void main (String[] args ) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		int ans = 0;
		for (int i = 0; i < input.length(); i++) {
			if (input.charAt(i) == '(') {
				s.push(true);
			} else if (input.charAt(i) == ')') {
				s.pop();
				if (input.charAt(i - 1) == '(') {
					ans += s.size();
				} else {
					ans++;
				}
			}
		}
		System.out.print(ans);
	}
}
