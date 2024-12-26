import java.util.Scanner;

public class Jaeyoung_BOJ_1978 {

    static boolean isPrime(int num) {
        if (num <= 1)
            return false;
        for(int i = 2; i < (num / 2) + 1; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int total = 0;

        while (n-- != 0) {
            int num = sc.nextInt();
            if (isPrime(num) == true)
                total += 1;
        }
        System.out.println(total);
    }
}
