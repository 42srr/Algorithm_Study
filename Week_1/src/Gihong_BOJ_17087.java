import java.io.*;
import java.util.Vector;
import java.lang.Math;

public class Gihong_BOJ_17087 {
	static Vector<Integer> v = new Vector<>();

	public static int euclidean(int a, int b) {
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
		String[] token = br.readLine().split(" ");
		int N = Integer.parseInt(token[0]);
		int S = Integer.parseInt(token[1]);
		token = br.readLine().split(" ");
		for (int i = 0; i < N; i++)
			v.add(Integer.parseInt(token[i]));
		int gcd = Math.abs(S - v.elementAt(0));
		for (int i = 1; i < N; i++)
			gcd = euclidean(gcd, Math.abs(v.elementAt(i) - S));
		System.out.print(gcd);
	}
}
