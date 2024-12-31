import java.io.*;
import java.util.Vector;

public class Gihong_BOJ_1182 {
	static int ans = 0;
	static int N, S;
	static Vector<Integer> v = new Vector<>();

	public static void recur(int depth, int branch, int val) {
		// System.out.println("debug: " + depth + " " + branch + " " + val + " " + ans);
		if (branch == v.size())
			return;
		if (branch != -1)
			val += v.elementAt(branch);
		if (branch != -1 && val == S)
			ans++;
		for (int i = branch + 1; i < v.size(); i++) {
			recur(depth + 1, i, val);
		}
	}

	public static void main (String[] args) throws IOException {

		// input
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] token = br.readLine().split(" ");
		N = Integer.parseInt(token[0]);
		S = Integer.parseInt(token[1]);
		token = br.readLine().split(" ");

		// solve
		for (int i = 0; i < N; i++) {
			int num = Integer.parseInt(token[i]);
				v.add(num);
		}
		recur(0, -1, 0);

		// output
		System.out.print(ans);
	}
}
