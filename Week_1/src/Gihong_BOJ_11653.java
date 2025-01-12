import java.io.*;

public class Gihong_BOJ_11653 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		int i = 2;
		while (N != 1) {
			if (N % i == 0) {
				N /= i;
				System.out.println(i);
			} else {
				i++;
			}
		}
	}	
}
