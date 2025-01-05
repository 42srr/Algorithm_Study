import java.io.*;
import java.util.Stack;

public class Gihong_BOJ_10773 {
	static Stack<Integer> s = new Stack<>();
	static int T;
	static int ans = 0;
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		T = Integer.parseInt(br.readLine());
		for (int i = 0; i < T; i++) {
			int num = Integer.parseInt(br.readLine());
			if (num == 0)
				ans -= s.pop();
			else {
				s.push(num);
				ans += num;
			}
		}
		System.out.print(ans);
	}
}
