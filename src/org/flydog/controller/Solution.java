package org.flydog.controller;

import java.util.Arrays;

public class Solution {
    public static int singleNumber(int[] nums) {
        int len = nums.length;
        if (len == 1)
            return nums[0];
        Arrays.sort(nums);
        if (len >= 3 && nums[0] != nums[1] && nums[1] == nums[2]) {
            return nums[0];
        }
        for (int i = 1; i < len - 1; i++) {
            if (nums[i] != nums[i + 1] && nums[i] != nums[i - 1]) {
                return nums[i];
            } else if (i == len - 2) {
                return nums[len - 1];
            }
        }
        return 0;
    }

    public static void rotate_90(int[][] matrix) {//向右
        int r = matrix[0].length;
        int c = r;
        int[][] temp = new int[c][r];//分配空间
        for (int i = 0; i < r; ++i) {    //行交换到列,第一行对应最后一列
            int colAt = r - i - 1;//原来矩阵地i行对应的列，应注意数组下表从0开始
            int rowAt = 0;
            int[] t = matrix[i];//取第i行
            while (rowAt < c) {
                temp[rowAt][colAt] = t[rowAt];//转移
                rowAt++;
            }
        }
        System.arraycopy(temp, 0, matrix, 0, temp.length);
    }

    public static void moveZeroes(int[] nums) {

    }

    public static void main(String[] a) {
        int[] arr = {1, 1, 2};
        System.out.println(singleNumber(arr));
    }

    public void rotate(int[][] matrix) {

    }
}
