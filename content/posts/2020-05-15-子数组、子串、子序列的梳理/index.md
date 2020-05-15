---
title: 子数组、子串、子序列的梳理
author: Walter Mitty
date: '2020-05-15'
hero: images/substring.jpg
---
# 子数组、子串、子序列的梳理

今天刷题的时候，遇到子数组有关的题目。做了很长时间提交时发现原来把题意给误解了，耽误了很多时间。为了以后不再吃亏，特翻译此文作为记录。同时将以前常混淆的字串与子序列一并梳理一下。

原文地址：[https://www.geeksforgeeks.org/subarraysubstring-vs-subsequence-and-programs-to-generate-them/](https://www.geeksforgeeks.org/subarraysubstring-vs-subsequence-and-programs-to-generate-them/)

## 什么是子数组和子串

数组的子数组是由原始数组元素的**连续块**组成的数组，关键点在于是原数组连续元素的组合。比如说，数组**[1,2,3,4]**就有十个非空的子数组，分别是[1],[2],[3],[4],[1,2],[2,3],[3,4],[1,2,3],[2,3,4],[1,2,3,4]，通常对于一个大小为n的数组或者字符串，其非空子数组或者子串的个数为**n\*(n+1)/2**。

### 子数组的生成方法

```java
class Test 
{ 
    static int arr[] = new int[]{1, 2, 3, 4}; 
      
    // Prints all subarrays in arr[0..n-1] 
    static void subArray( int n) 
    { 
        // Pick starting point 
        for (int i=0; i <n; i++) 
        { 
            // Pick ending point 
            for (int j=i; j<n; j++) 
            { 
                // Print subarray between current starting 
                // and ending points 
                for (int k=i; k<=j; k++) 
                    System.out.print(arr[k]+" "); 
            } 
        } 
    } 
      
    // Driver method to test the above function 
    public static void main(String[] args)  
    { 
        System.out.println("All Non-empty Subarrays"); 
        subArray(arr.length); 
          
    } 
} 
```

## 什么是子序列

由一个序列中的零个或多个元素组成，而不改变已有元素顺序的序列。
对于上述的**[1,2,3,4]**。(1), (2), (3), (4), (1,2), (1,3),(1,4), (2,3), (2,4), (3,4), (1,2,3), (1,2,4), (1,3,4), (2,3,4), (1,2,3,4)都是其非空子序列。更笼统地说，对于一个大小为n的序列，我们总共可以有（**2 ^n -1**）个非空子序列。

![子序列与子串的区别](https://tva1.sinaimg.cn/large/007S8ZIlly1get8etl2r1j31co0u0jwu.jpg)

### 子序列的生成方法

```java
/*  Java code to generate all possible subsequences. 
    Time Complexity O(n * 2^n) */
  
import java.math.BigInteger; 
  
class Test 
{ 
    static int arr[] = new int[]{1, 2, 3, 4}; 
      
    static void printSubsequences(int n) 
    { 
        /* Number of subsequences is (2**n -1)*/
        int opsize = (int)Math.pow(2, n); 
       
        /* Run from counter 000..1 to 111..1*/
        for (int counter = 1; counter < opsize; counter++) 
        { 
            for (int j = 0; j < n; j++) 
            { 
                /* Check if jth bit in the counter is set 
                    If set then print jth element from arr[] */
        
                if (BigInteger.valueOf(counter).testBit(j)) 
                    System.out.print(arr[j]+" "); 
            } 
            System.out.println(); 
        } 
    } 
      
    // Driver method to test the above function 
    public static void main(String[] args)  
    { 
        System.out.println("All Non-empty Subsequences"); 
        printSubsequences(arr.length); 
    } 
} 
```


