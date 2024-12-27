import java.util.Scanner;
import java.util.Vector;
public class Jaeyoung_BOJ_15649 {

    public static Vector<Integer> vec = new Vector<>();
    public static int n;
    public static int m;


    static void solve(int depth) {
        if (depth == m) {
            for (Integer integer : vec) {
                System.out.print(integer + " ");
            }
            System.out.println();
            return ;
        }

        for(int i = 1; i <= n; i++) {
            if (vec.contains(i))
                continue;
            else {
                vec.add(i);
                solve(depth + 1);
            }
            vec.remove(vec.size() - 1);
        }

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        m = sc.nextInt();

        solve(0);
    }
}
