import java.io.*;
import java.util.Vector;

public class Gihong_BOJ_15650 { // 풀이: DFS 참조
	static int N, M;
	static Vector<Integer> v = new Vector<>();
	public static void DFS(int depth, int branch) {
		if (depth == M) { // 기저조건
			for (int i = 0; i < M; i++)
				System.out.print(v.elementAt(i) + " ");
			System.out.println();
			return;
		}
		for (int i = branch + 1; i <= N; i++) { // i는 다음 함수의 branch 역할
			v.add(i);
			DFS(depth + 1, i);
			v.remove(v.size() - 1);
		}
	}
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] token = br.readLine().split(" ");
		N = Integer.parseInt(token[0]);
		M = Integer.parseInt(token[1]);
		DFS(0, 0);
	}
}
