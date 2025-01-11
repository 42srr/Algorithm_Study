import java.io.*;
import java.util.Stack;

public class Gihong_BOJ_10773 { // StringBuilder 안 쓰면 시간초과
    static Stack<Character> left = new Stack<>();
    static Stack<Character> right = new Stack<>();
    
    public static void L() {
        if (!left.isEmpty()) {
            right.push(left.pop());
        }
    }
    
    public static void D() {
        if (!right.isEmpty()) {
            left.push(right.pop());
        }
    }
    
    public static void B() {
        if (!left.isEmpty()) {
            left.pop();
        }
    }
    
    public static void P(char c) {
        left.push(c);
    }
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String initialString = br.readLine();
        int M = Integer.parseInt(br.readLine());

        for (char c : initialString.toCharArray()) {
            left.push(c);
        }

        for (int i = 0; i < M; i++) {
            String command = br.readLine();
            char cmd = command.charAt(0);

            switch (cmd) {
                case 'L':
                    L();
                    break;
                case 'D':
                    D();
                    break;
                case 'B':
                    B();
                    break;
                case 'P':
                    P(command.charAt(2));
                    break;
            }
        }

        StringBuilder result = new StringBuilder();
        while (!left.isEmpty()) {
            right.push(left.pop());
        }
        while (!right.isEmpty()) {
            result.append(right.pop());
        }
        System.out.println(result.toString());
    }
}