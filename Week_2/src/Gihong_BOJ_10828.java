import java.util.Stack;
import java.io.*;

public class Gihong_BOJ_10828 {

	static Stack<Integer> s = new Stack<>();
	static int	N;

	public static void main (String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		for (int i = 0; i < N; i++) {
			String[] token = br.readLine().split(" ");
			
			if (token[0].equals("push")) {
				s.push(Integer.parseInt(token[1]));
			}
			else if (token[0].equals("pop")) {
				if (s.isEmpty())
					System.out.println(-1);
				else
					System.out.println(s.pop());
			}
			else if (token[0].equals("size"))
				System.out.println(s.size());
			else if (token[0].equals("empty"))
				System.out.println(s.isEmpty() ? 1 : 0);
			else if (token[0].equals("top")) {
				if (s.isEmpty())
					System.out.println(-1);
				else
					System.out.println(s.peek());
			}
			else
				System.out.println("CMD ERROR");
		}
	}
}
