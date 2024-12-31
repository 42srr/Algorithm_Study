import java.io.*;
import java.util.Vector;
import java.util.Collections;

public class Gihong_BOJ_2981 {
	static int T;
	static Vector<Integer> input = new Vector<>();
	static int gcd; // 최대공약수

	public static int euclidean(int a, int b) { // 유클리드 호제법
		int r = -1;
		while (r != 0) {
			r = a % b;
			a = b;
			b = r;
		}
		return (a);
	}
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		T = Integer.parseInt(br.readLine());
		for (int tc = 1; tc <= T; tc++)
			input.add(Integer.parseInt(br.readLine()));
		Collections.sort(input);
		gcd = input.elementAt(1) - input.elementAt(0);
		for (int i = 2; i < T; i++)
			gcd = euclidean(gcd, input.elementAt(i) - input.elementAt(i - 1));
		for (int i = 2; i <= gcd; i++) {
			if (gcd % i == 0)
				System.out.print(i + " ");
		}
	}
}
