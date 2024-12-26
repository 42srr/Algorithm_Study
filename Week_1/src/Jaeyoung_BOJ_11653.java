import java.util.Scanner;

public class Jaeyoung_BOJ_11653 {

    static void solve(int num) {
        while(num != 1) {
            for(int i = 2; i <= num; i++) {
                while(num % i == 0) {
                    System.out.println(i);
                    num  = num / i;
                    //System.out.println("num :" + num);
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();
        if (num != 1)
            solve(num);
    }
}
