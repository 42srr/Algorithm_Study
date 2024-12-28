import java.io.*;
import java.nio.Buffer;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.Vector;

public class Jaeyoung_BOJ_6588 {

    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    static boolean[] arr = new boolean[1000001];

    static void solve(int num) throws IOException{
        for(int i = 3; i <= num / 2; i+=2) {
            int leftNum = num - i;
            if (arr[i] && arr[leftNum]) {
                bw.write(num + " = " + i + " + " + leftNum + "\n");
                return ;
            }
        }
        bw.write("Goldbach's conjecture is wrong.\n");
    }

    static void initArr() {
        Arrays.fill(arr, true);
        arr[0] = arr[1] = false;

        for(int i = 2; i < 1000001 / i; i++) {
            if (arr[i]) {
                for(int j = i * 2; j < 1000001; j+=i) {
                    arr[j] = false;
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        initArr();

        while(true) {
            int num = Integer.parseInt(br.readLine());
            if (num == 0) break;

            solve(num);
        }

        bw.flush();
        bw.close();
        br.close();
    }
}
