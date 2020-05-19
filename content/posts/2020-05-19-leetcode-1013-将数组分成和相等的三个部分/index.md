---
title: Leetcode-1013-将数组分成和相等的三个部分
author: Walter Mitty
date: '2020-05-15'
hero: images/leetcode.jpg
---
|  Category  |  Difficulty   | Likes | Dislikes |
| :--------: | :-----------: | :---: | :------: |
| algorithms | Easy (40.58%) |  98   |    -     |

给你一个整数数组 `A`，只有可以将其划分为三个和相等的非空部分时才返回 `true`，否则返回 `false`。

形式上，如果可以找出索引 `i+1 < j` 且满足 `(A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])` 就可以将数组三等分。

 

**示例 1：**

```
输入：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
```

**示例 2：**

```
输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
```

**示例 3：**

```
输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
```

##  暴力解法

 根据提示，从数组首部开始寻找，只要找到满足和等于总和三分之一的位置，再继续寻找第二个位置，此时如果能找到就说明可以将数组三等分。

### 代码

```js
/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  // compute the sum
  let sum = 0;
  let partSum = 0;
  let first;
  let second;
  let last;
  for (let index = 0; index < A.length; index++) {
    sum += A[index];
  }
  for (let j = 0; j < A.length; j++) {
    partSum += A[j];
    if (partSum === sum / 3) {
      first = j;
      break;
    }
    second = j;
  }
  partSum = 0;
  for (let k = first + 1; k < A.length; k++) {
    partSum += A[k];
    if (partSum === sum / 3 && k != A.length - 1) {
      return true;
    }
    last = k;
  }
  if (second === A.length - 1 || last === A.length - 1) {
    return false;
  }
};
// @lc code=end

```



## 优化

> 待更新
