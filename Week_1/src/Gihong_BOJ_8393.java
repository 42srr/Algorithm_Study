import java.io.*;
import java.util.*;

public class Main
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();
        int n = Integer.parseInt(s);
        int ans = 0;
        for (int i = 1; i <= n; i++)
            ans += i;
        System.out.println(ans);
    }
}