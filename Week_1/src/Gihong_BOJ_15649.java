import java.io.*;

public class Gihong_BOJ_15649 {
	// DFS(깊이 우선 탐색) 참고
	static int[] visited = new int[9]; // x번째 branch 노드의 점유 상태
	static int[] stack = new int[9];
	static int N; // N은 DFS 에서 branch
	static int M; // M은 DFS 에서 depth

	public static void print_stack() {
		for (int i = 1; i <= M; i++) {
			System.out.print(stack[i]);
			System.out.print(' ');
		}
		System.out.println();
	}

	public static void DFS(int branch, int depth) {
		stack[depth] = branch; // 함수 시작시 stack push
		if (depth == M) // 기저조건(함수의 재귀를 끝내는 조건)
		{
			print_stack();
			return; 
		}
		for (int i = 1; i <= N; i++) { // 이 for 문에서 i 는 다음 depth 의 branch 역할을 한다.
			if (visited[i] == 0) {
				visited[i] = 1; // 함수 시작시 branch 번 노드 점유
				DFS(i, depth + 1);	// 1 depth 더 깊이 DFS 호출
				visited[i] = 0;	// 함수 종료시 i번 branch 노드 점유 해제
				stack[depth + 1] = 0; // 함수 종료시 stack pop (안 해줘도 됨)
			}
		}
	}

	public static void main (String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] token = br.readLine().split(" ");
		N = Integer.parseInt(token[0]);	
		M = Integer.parseInt(token[1]);
		DFS(0, 0);
	}
}
