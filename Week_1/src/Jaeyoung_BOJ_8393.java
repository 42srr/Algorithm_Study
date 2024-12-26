import java.util.Scanner;

public class Jaeyoung_BOJ_8393 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        long result = (n * (n + 1) / 2);
        System.out.print(result);
    }
}