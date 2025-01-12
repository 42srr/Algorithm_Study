import java.io.*;
import java.util.Vector;

public class Gihong_BOJ_6603 {
	static Vector<Integer> stack = new Vector<>();
	static Vector<Integer> input = new Vector<>();
	static int K;

	public static void print_stack() {
		for (int i = 0; i < stack.size(); i++)
			System.out.print(stack.elementAt(i) + " ");
		System.out.println();
	}

	public static void DFS(int depth, int branch) {
		if (depth == 6)  { // 기저조건
			print_stack();
			return;
		}
		for (int i = branch + 1; i < input.size(); i++) {
			stack.add(input.elementAt(i)); // DFS 시작할 때 stack push
			DFS(depth + 1, i);
			stack.remove(stack.size() - 1); // DFS 끝날 때 stack pop
		}
	}

	public static void main (String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		while (true) {
			// reset
			stack.clear();
			input.clear();

			// input
			String[] token = br.readLine().split(" ");
			for (int i = 0; i < token.length; i++) {
				if (i == 0)
					K = Integer.parseInt(token[i]);
				else
					input.add(Integer.parseInt(token[i]));
			}

			// solve
			if (K == 0)
				break;
			DFS(0, -1);
			System.out.println();
		}

	}
}
