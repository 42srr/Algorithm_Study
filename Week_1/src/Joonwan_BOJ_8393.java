import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Joonwan_BOJ_8393 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(bf.readLine());
		int res = 0;

		for (int i = 1; i <= n; i++) {
			res += i;
		}

		System.out.println(res);
	}
}
