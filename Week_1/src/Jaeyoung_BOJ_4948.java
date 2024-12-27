import java.util.Scanner;

public class Jaeyoung_BOJ_4948 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        boolean[] arr = new boolean[250000];
        for(int i = 0; i < 250000; i++)
            arr[i] = true;
        arr[0] = arr[1] = false;


        for(int i = 2; i * i < 250000; i++) {
            if (arr[i]) {
                for (int j = 2; i * j < 250000; j++) {
                    arr[i * j] = false;
                }
            }
        }

        while(true) {
            int num = sc.nextInt();
            if (num == 0) break;

            int totalNum = 0;

            for(int i = num + 1; i <= num * 2; i++) {
                if (arr[i]) {
                    totalNum++;
//                    System.out.print(i + " : ");
//                    System.out.println(totalNum);
                }
            }

            System.out.println(totalNum);
        }
    }
}
