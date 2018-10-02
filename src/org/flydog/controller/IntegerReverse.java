package org.flydog.controller;

import java.util.Scanner;

public class IntegerReverse {
    public static Integer integerReverse(String in) {
        int a = 0;
        int len = in.length();
        int t = Integer.parseInt(in);
        String s = null;
        if (t > 0) {
            s = StringRe(in);
            a = Integer.valueOf(s);
        } else {
            s = StringRe(in.substring(1, len));
            a = -Integer.valueOf(s);
        }
        return a;
    }

    public static String StringRe(String in) {
        char[] ch = new char[in.length()];
        for (int i = 0; i < in.length(); ++i) {
            ch[i] = in.charAt(in.length() - i - 1);
        }
        return new String(ch);
    }

    public static void main(String[] s) {
        System.out.println(integerReverse(new Scanner(System.in).next()));
    }
}
