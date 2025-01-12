import java.io.*;

public class Gihong_BOJ_2609 {

	public static int euclidean(int a, int b) {
		int r = -1;
		while (r != 0) {
			r = a % b;
			a = b;
			b = r;
		}
		return (a);
	}

	public static int lcm(int a, int b) {
		return (a * b / euclidean(a, b));
	}

	public static void main(String []args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] token = br.readLine().split(" ");
		int A = Integer.parseInt(token[0]);
		int B = Integer.parseInt(token[1]);
		System.out.println(euclidean(A, B));
		System.out.println(lcm(A, B));
	}
}
