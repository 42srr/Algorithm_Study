import java.io.*;
import java.util.Vector;

public class Gihong_BOJ_10974 {
	static Vector<Integer> stack = new Vector<>();
	static int[] visited = new int[8];
	static int N;
	public static void DFS(int depth, int branch) {
		if (depth == N) {
			for (int i = 0; i < N; i++)
				System.out.print(stack.elementAt(i) + " ");
			System.out.println();
			return;
		}
		for (int i = 0; i < N; i++) {
			if (visited[i] == 1)
				continue;
			visited[i] = 1;
			stack.add(i + 1);
			DFS(depth + 1, i);
			stack.remove(stack.size() - 1);
			visited[i] = 0;
		}
	}
	public static void main (String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		DFS(0, 0);
	}
}
