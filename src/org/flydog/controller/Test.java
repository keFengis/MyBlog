package org.flydog.controller;

import java.util.ArrayList;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        String all = "ab cc dd              ee  d  dwadwa";
        List<Integer> startList = new ArrayList<Integer>();
        List<Integer> endList = new ArrayList<Integer>();
        startList.add(0);
        for (int j = 0; j < all.length() - 1; ++j) {
            if (all.charAt(j) == ' ' && all.charAt(j + 1) != ' ') {
                startList.add(j + 1);
            }
            if (all.charAt(j) != ' ' && all.charAt(j + 1) == ' ') {
                endList.add(j + 1);
            }
        }
        endList.add(all.length() - 1);
        for (int i = startList.size() - 1; i >= 0; --i) {
            String re = all.substring(startList.get(i), endList.get(i));
            System.out.print(re + " ");
//            System.out.print(startList.get(i) + "\t");
//            System.out.println(endList.get(i));
//            System.out.println(all.length());
        }
    }
}