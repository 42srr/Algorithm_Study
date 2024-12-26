import java.util.Scanner;

public class Jaeyoung_BOJ_1929 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int start = sc.nextInt();
        int end = sc.nextInt();

        boolean[] arr = new boolean[end + 1];
        for(int i = 0; i < end + 1; i++) {
            arr[i] = true;
        }
        arr[0] = false;
        arr[1] = false;

        for(int i = 2; i * i <= end; i++) {
            if (arr[i] == true) {
                for(int j = 2; i * j <= end; j++) {
                    arr[i * j] = false;
                }
            }
        }

        for(int i = start; i <= end; i++) {
            if (arr[i] == true) {
                System.out.println(i);
            }
        }
    }
}