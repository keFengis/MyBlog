package org.flydog.controller;

import java.util.Scanner;

public class Main {
    public static int[][] rotate_90(int[][] matrix, int r, int c) {//向右
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
        return temp;
    }

    public static int[][] rotate90(int[][] matrix, int r, int c) {//向左
        int[][] temp = new int[c][r];//分配空间
        for (int i = 0; i < c; ++i) {    //行交换到列,第一列对应最后一行 第1列对应最后一行
            int[] t = new int[r];
            for (int j = 0; j < r; ++j) {
                t[j] = matrix[j][i];
            }
            temp[c - i - 1] = t;
        }
        return temp;
    }

    public static int[][] rotate180(int[][] in, int r, int c) {
        int[][] temp = new int[r][c];
        for (int i = 0; i < r; ++i) {
            int[] t = reverse(in[i]);
            temp[r - i - 1] = t;
        }
        return temp;
    }

    public static int[] reverse(int[] in) {
        int[] t = new int[in.length];
        for (int i = 0; i < in.length; ++i) {
            t[in.length - i - 1] = in[i];
        }
        return t;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double m, n, ang1;
        try {
            m = Double.valueOf(scanner.next());
            if ((int) m != m || m <= 0 || m > 20) {
                System.out.print("data type error");
                return;
            }
        } catch (NumberFormatException e) {
            System.out.print("data type error");
            return;
        }
        try {
            n = Double.valueOf(scanner.next());
            if ((int) n != n || n <= 0 || n > 20) {
                System.out.print("data type error");
                return;
            }
        } catch (NumberFormatException e) {
            System.out.print("data type error");
            return;
        }
        try {
            ang1 = Double.valueOf(scanner.next());
            if (ang1 != 90 && ang1 != -90 && ang1 != 180) {
                System.out.print("angle data error");
                return;
            }
            if ((int) ang1 != ang1) {
                System.out.print("data type error");
                return;
            }
        } catch (NumberFormatException e) {
            System.out.println("data type error");
            return;
        }
        int M = (int) m;
        int N = (int) n;
        int[][] in = new int[M][N];
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                String t = scanner.next();
                double va = 0;
                try {
                    va = Double.valueOf(t);
                    if (va > 255 || va < 0) {
                        System.out.print("matrix data error");
                        return;
                    }
                    if ((int) va != va) {
                        System.out.print("data type error");
                        return;
                    }
                } catch (NumberFormatException e) {
                    System.out.print("data type error");
                    return;
                }

                in[i][j] = (int) va;
            }
        }
        if (ang1 == 90) {
            int[][] re = rotate90(in, M, N);
            for (int a = 0; a < n; ++a) {
                for (int b = 0; b < m; ++b) {
                    if (b == m - 1)
                        System.out.print(re[a][b]);
                    else
                        System.out.print(re[a][b] + " ");
                }
                System.out.println();
            }
        }
        if (ang1 == -90) {
            int[][] re = rotate_90(in, M, N);
            for (int a = 0; a < n; ++a) {
                for (int b = 0; b < m; ++b) {
                    if (b == m - 1)
                        System.out.print(re[a][b]);
                    else
                        System.out.print(re[a][b] + " ");
                }
                System.out.println();
            }
        }
        if (ang1 == 180) {
            int[][] re = rotate180(in, M, N);
            for (int a = 0; a < m; ++a) {
                for (int b = 0; b < n; ++b) {
                    if (b == n - 1)
                        System.out.print(re[a][b]);
                    else
                        System.out.print(re[a][b] + " ");
                }
                System.out.println();
            }
        }
    }
}