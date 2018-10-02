package org.flydog.controller;

import java.util.Scanner;

public class Huiws {
    public static boolean isPalindrome(int x) {
        boolean is = true;
        String num = String.valueOf(x);
        if (x < 0)
            return false;
        if (num.length() < 2) {
            return true;
        }
        if (num.length() == 2) {
            return num.charAt(0) == num.charAt(1);
        }
        for (int i = 0; i < num.length(); ++i) {
            if (num.length() % 2 == 0) {
                char a = num.charAt(i);
                char b = num.charAt(num.length() - i - 1);
                if (a != b) {
                    is = false;
                    break;
                }
            } else {
                char a = num.charAt(i);
                char b = num.charAt(num.length() - 1 - i);
                if (a != b) {
                    is = false;
                    break;
                }
            }
        }
        return is;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(new Scanner(System.in).nextInt()));
    }
}
