import java.util.Scanner;

public class Jaeyoung_BOJ_9020 {

    static boolean[] arr = new boolean[20001];

    static void findPartition(int num) {
        int firstPrime, secondPrime;
        firstPrime = 0;
        secondPrime = 0;

        //로직
        for(int i = num / 2; i >= 2; i--) {
            if (!arr[i])
                continue;

            if (num % i == 0) {
                firstPrime = i;
                secondPrime = i;
                break ;
            }

            if (arr[num - i]) {
                firstPrime = i;
                secondPrime = num - i;
                break;
            }
        }


        System.out.printf("%d %d\n", firstPrime, secondPrime);
    }

    static void initArr() {
        for(int i = 2; i < 20001; i++)
                arr[i] = true;

        for(int i = 2; i * i < 20001; i++) {
            if (arr[i]) {
                for(int j = 2; j * i < 20001; j++) {
                    arr[i * j] = false;
                }
            }
        }
    }


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        initArr();
        int num = sc.nextInt();

        while(num-- != 0) {
            findPartition(sc.nextInt());
        }
    }
}
