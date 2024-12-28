import java.io.*;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Jaeyoung_BOJ_6603 {

    // 입출력 버퍼
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    // 수 정렬 배열
    static int[]arr = new int[14];
    static ArrayList<Integer> result = new ArrayList<>();
    static int arrayNum = 0;

    static void solve(int idx, int count) throws IOException {
        if (count == 6) {
            String s = "";
            for (int i = 1; i <= 6; i++) {
                s += (Integer.toString(result.get(i)) + " ");
            }
            bw.write(s + "\n");
            return ;
        }

        for(int i = idx + 1; i <= arrayNum; i++) {
            result.add(arr[i]);
            solve(i, count + 1);
            result.remove(result.size() - 1);
        }
    }

    public static void main(String[] args) throws IOException {
        int flag = 0;
        while(true) {
            //초기 배열 초기화
            for (int i = 0; i < 13; i++)
                arr[i] = 0;
            result.clear();
            result.add(0);

            //초기 값 세팅
            StringTokenizer st = new StringTokenizer(br.readLine());
            arrayNum = Integer.parseInt(st.nextToken());
            if (arrayNum == 0)
                break ;
            for(int i = 1; i <= arrayNum; i++)
                arr[i] = Integer.parseInt(st.nextToken());

            if (flag++ != 0) {
                bw.write("\n");
            }
            //메인 로직
            solve(0, 0);

        }

        bw.flush();
        bw.close();
        br.close();
    }
}
