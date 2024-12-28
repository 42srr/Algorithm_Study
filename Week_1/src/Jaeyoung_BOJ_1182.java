import java.io.*;
import java.util.StringTokenizer;
import java.util.ArrayList;

public class Jaeyoung_BOJ_1182 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));


    static int[] arr = new int[21];
    static int result = 0;
    static int N;
    static int S;

    static void solve(int index, int count, int sum) {
        if (count > 0 && sum == S)
            result += 1;

        if (index == N ) return ;

        for(int i = index + 1; i <= N; i++) {
            solve(i, count + 1, sum+arr[i]);
        }
    }

    public static void main(String[] args) throws IOException {
//        String input = br.readLine();
//        String[] words = input.split(" ");
//        N = Integer.parseInt(words[0]);
//        S = Integer.parseInt(words[1]);

        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        S = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(br.readLine());
        for(int i = 1; i <= N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }


//        for(int i = 1; i <= N; i++) {
//            solve(i, 0, 0);
//        }
        solve(0, 0, 0);

        bw.write(result + "\n");
        bw.flush();
        bw.close();
        br.close();
    }
}
