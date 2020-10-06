---
title: 《算法竞赛入门经典第2版》题解系列 第五章 C++和STL入门
author: wyjoutstanding
date: '2020-10-06'
hero: images/hero.png
---
# 《算法竞赛入门经典第2版》题解系列 第五章 C++和STL入门

## 题解分类索引

**[OJ网址点这里](https://vjudge.net/problem)**

紫书刷题进行中，题解系列【[GitHub](https://github.com/wyjoutstanding/Algorithm/tree/master/aoapc_uva)|[CSDN](https://blog.csdn.net/qq_40738840/article/details/104175021)】

 本章主要练习STL使用，熟练使用以下容器

+ 线性：`vector`,`list`,`string`
+ 关联：`map,set`（`unorder_map,unorder_set`用于查询效率高）
+ 特殊：`stack,queue,priority_queue`
+ 算法：`sort,lower_bound,find,`

题目基本都不难，仔细读题，理清思路，字符串处理比较繁琐，细节处理很重要，刷题愉快！！！

写代码时先写框架，在大脑调试几遍保证框架正确性后在依次处理细节，bug较少，享受一遍AC快感~

| 书中编号 | 题目编号 | 标题（题解链接）                                             | 分类     | 备注                                            |
| -------- | -------- | ------------------------------------------------------------ | -------- | ----------------------------------------------- |
| 例题5-1  | UVA10474 | [Where is the Marble](#例题5-1-uva10474-where-is-the-marble) | 水题     | sort,lowerbound/同分排名                        |
| 例题5-2  | UVA101   | [The Blocks Problem](#例题5-2-uva101-the-blocks-problem)     | 水题     | vector插入删除（删除顺序注意）                  |
| 例题5-3  | UVA10815 | [Andy's First Dictionary](#例题5-3-uva10815-andy's-first-dictionary) | 水题     | set去重，字典序排列                             |
| 例题5-4  | UVA156   | [Ananagrams](#例题5-4-uva156-ananagrams)                     | 好题     | map，set；顺序无关-标准化：排序\|计数           |
| 例题5-5  | UVA12096 | [The SetStack Computer](#习题5-5-uva12096-the-setstack-computer) | 好题     | **手动分配id（递归定义）**；集合交并算法；stack |
| 例题5-6  | UVA540   | [Team   Queue](#例题5-6-uva540-team-queue)                   | 好题     | **双队列/二级索引/二维数组**，读题              |
| 例题5-7  | UVA136   | [Ugly   Numbers](#例题5-7-uva136-ugly-numbers)               | 数学     | 丑数构造，优先队列                              |
| 例题5-8  | UVA400   | [Unix ls](#例题5-8-uva400-unix-ls)                           | 水题     | 字符串处理，输出格式控制，按列输出              |
| 例题5-9  | UVA1592  | [Database](#例题5-9-uva1592-database)                        | 好题     | 行列同素求解；map优化；stringstream分割字符串   |
| 例题5-10 | UVA207   | [PGA Tour Prize Money](#例题5-10-uva207-pga-tour-prize-money) |          | 待填坑                                          |
| 例题5-11 | UVA814   | [The Letter Carrier's Rounds](#例题5-11-uva814-the-letter-carrier's-rounds) | 中级模拟 | 字符串处理；读题仔细（按输入顺序输出）          |
| 例题5-12 | UVA221   | [Urban Elevations](#例题5-12-uva221-urban-elevations)        | 离散化   | sort，**连续化离散分析**                        |
| 习题5-1  | UVA1593  | [Alignment of Code](#习题5-1-uva1593-alignment-of-code)      | 水题     | 字符串处理；stringstream分割；对齐宽度          |
| 习题5-2  | UVA1594  | [Ducci   Sequence](#习题5-2-uva1594-ducci-sequence)          | 水题     | set序列判重                                     |
| 习题5-3  | UVA10935 | [Throwing cards away I](#习题5-3-uva10935-throwing-cards-away-i) | 水题     | queue模拟                                       |
| 习题5-4  | UVA10763 | [Foreign Exchange](#习题5-4-uva10763-foreign-exchange)       | 水题     | 映射（map/打表）                                |
| 习题5-5  | UVA10391 | [Compound   Words](#习题5-5-uva10391-compound-words)         | 水题     | set，string子串                                 |
| 习题5-6  | UVA1595  | [Symmetry](#习题5-6-uva1595-symmetry)                        | 思考题   | 对称性判断                                      |
| 习题5-7  | UVA12100 | [Printer   Queue](#习题5-7-uva12100-printer-queue)           | 简单模拟 | queue；map（类似优先队列）                      |
| 习题5-8  | UVA230   | [Borrowers](#习题5-8-uva230-borrowers)                       | 中级模拟 | 分级sort；set字典序排列；map分配id              |
| 习题5-9  | UVA1596  | [Bug   Hunt](#习题5-9-uva1596-bug-hunt)                      | 中级模拟 | 字符串处理；数组表达式求值；map嵌套             |
| 习题5-10 | UVA1597  | [Searching the Web](#习题5-10-uva1597-searching-the-web)     | 搜索模拟 | 字符串处理；**搜索引擎原理**；集合交并补        |
| 习题5-11 | UVA12504 | [Updating a Dictionary](#习题5-11-uva12504-updating-a-dictionary) | 简单模拟 | 字符串处理；map；字符串分割                     |
| 习题5-12 | UVA511   | [Do You Know the Way to San Jose](#习题5-12-uva511-do-you-know-the-way-to-san-jose) | 待填坑   |                                                 |
| 习题5-13 | UVA822   | [Queue   and A](#习题5-13-uva822-queue-and-a)                | 待填坑   |                                                 |
| 习题5-14 | UVA1598  | [Exchange](#习题5-14-uva1598-exchange)                       | 待填坑   |                                                 |
| 习题5-15 | UVA12333 | [Revenge of Fibonacci](#习题5-15-uva12333-revenge-of-fibonacci) | 待填坑   |                                                 |
| 习题5-16 | UVA212   | [Use of Hospital Facilities](#习题5-16-uva212-use-of-hospital-facilities) | 待填坑   |                                                 |

## 例题5-1 UVA10474 Where is the Marble

### 题目大意

给定N个具有标号的小球，升序排列后，给定M个查询，若存在，输出位置（从1开始）；否则输出提示信息

### 算法设计

用一维数组存储N个小球，使用`sort`升序排列，使用`lowerbound`找到第一个大于等于x的值，因此找到的值有可能为**最后一个元素的后面**或**大于x**的值，因此要多一步判断，如下所示

```cpp
p = lower_bound(a, a+n, q); // 找到>=q的第一个数
if (p - a != n && *p == q) printf("%d found at %d\n", q, p-a+1); // 存在且为q
else printf("%d not found\n", q); 
```

若不想用该函数，也可转换为**n个成绩（含重复）进行排名处理问题**，排序后一次遍历计数即可

### AC代码（C++11，sort，lowerbound/成绩排名（含同分））

```cpp
#include<bits/stdc++.h>
using namespace std;
int n, m, a[100010], q, *p, num=0;
int main() {
    while (cin >>n >>m && (n != 0 && m != 0)) {
        for (int i = 0; i < n; i ++) cin >>a[i];
        sort(a, a+n); // 升序排列
        printf("CASE# %d:\n", ++num);
        while (m --) {
            cin >>q;
            p = lower_bound(a, a+n, q); // 找到>=q的第一个数
            if (p - a != n && *p == q) printf("%d found at %d\n", q, p-a+1); // 存在且为q
            else printf("%d not found\n", q); 
        }
    }
    return 0;
}
```

## 例题5-2 UVA101 The Blocks Problem

### 题目大意

给定编号为[0,N-1]的方块，输入一系列操作指令，求最终结果。

假设存在编号为[0,N-1]的柱子，初始状态每根柱子i仅有编号为i的方块，五种操作指令如下：

+ `move a onto b`：将**a和b所在上方**的方块先归位，再将a移到b所在柱子
+ `move a over b`：仅将**a所在上方**的方块先归位，再将a移到b所在柱子
+ `pile a onto b`：将**b所在上方**的方块先归位，再将**a及其上方的所有方块**移到b所在柱子
+ `pile a over b`：**无需归位**，直接将**a及其上方的所有方块**移到b所在柱子
+ `quit`：结束，打印输出
+ 无效指令：命令中a和b在同一柱子，直接忽略即可

### 思路分析

本质是数组的序列插入和删除问题

+ `pile a ...b`即是从a所在数组删除若干个数，并按原顺序插入b所在数组过程，注意删除顺序，边删边插注意下标问题
+ 由于不知每个柱子长度，可用变长数组`vector`完成插入删除和查询
+ 为了快速获取每个编号的位置，定义`map<int, pair<int,int> > pos; `来存储每个编号对应位置，每次插入删除时维护该映射

### 注意点

+ 注意删除和插入的顺序问题，删除易出错

### AC代码（C++11，vector插入删除）

```cpp
#include<bits/stdc++.h>
using namespace std;
string op1, op2;
vector<int> blocks[30]; // 二维数组存储方块编号
map<int, pair<int,int> > pos; // 存储每个编号对应位置
int n, a, b;
void showResult() { // 打印结果
    for (int i = 0; i < n; i ++) {
        printf("%d:", i); // 这里别打印空格
        for (auto p : blocks[i]) printf(" %d", p);
        puts("");
    }
}
void clear(int a) { // 将a上面的都归位（不包含a）
    int ia = pos[a].first, j = pos[a].second + 1;
    for (; j < blocks[ia].size(); j ++) { // 考虑插入当前行
        int k = blocks[ia][j]; // 要删除的值
        blocks[k].push_back(k); // 归位
        pos[k].first = k; pos[k].second = blocks[k].size()-1; // 更新位置
    }
    blocks[ia].erase(blocks[ia].begin()+pos[a].second+1, blocks[ia].end()); // 最后一块删除
}
void move(int a, int b) { // 将a和它上面的方块全移到含有b的柱子上
    int ia = pos[a].first, left = pos[a].second, ib = pos[b].first;
    for (int j = left; j < blocks[ia].size(); j ++) { // 开始移入
        blocks[ib].push_back(blocks[ia][j]); // 移入b所在数组尾部
        pos[blocks[ia][j]].first = ib; // 位置更新
        pos[blocks[ia][j]].second = blocks[ib].size()-1;
    }
    blocks[ia].erase(blocks[ia].begin()+left, blocks[ia].end()); // 一块删除
}
int main() {
    cin >>n;
    for (int i = 0; i < n; i ++) {
        blocks[i].push_back(i);
        pos[i] = {i,0}; // 行列值位置
    }
    while (cin >>op1 && op1 != "quit") {
        cin >>a >>op2 >>b;
        if (pos[a].first == pos[b].first) continue; // 同一叠位置
        if (op1 == "move") clear(a);
        if (op2 == "onto") clear(b);
        move(a,b);
    }
    showResult();
    return 0;
}
```

## 例题5-3 UVA10815 Andy's First Dictionary

### 思路分析

> 给定若干行字符串，按字典序输出不重复的单词

+ 字典序排列和去重：定义`set<string> dict;` 存储词典，自动去重且按字典序排列
+ 可用`getline`读入每一行，将其字母均转为小写，非字母转为空格，拼接文本
+ 可用`stringstream`分割空格间隔的字符串

### 注意点

+ 拼接每一行时注意加上空格，避免首尾直接相接，照成错误单词

### AC代码（C++11，set）

```cpp
#include<bits/stdc++.h>
using namespace std;
string text, s;
set<string> dict; // 词典
int main() {
    while (getline(cin, s)) {
        for (auto& ch : s) {
            if (isalpha(ch)) ch = tolower(ch); // 替换小写
            else ch = ' '; // 替换空格 
        }
        text += " "+s; // 拼接文本，注意空格，避免两行尾首直接相连
    }
    stringstream input(text); // 按空格分割
    while (input >>s) dict.insert(s); // 插入去重
    for (auto p : dict) cout <<p <<endl;
    return 0;
}
```

## 例题5-4 UVA156 Ananagrams

### 题目大意

给定若干单词，按**字典序**输出**不存在重排**的单词。（**经测试，不包含重复的单词**）

重排单词：每个字母出现次数一样，但顺序不同，即对单词序列的一个排序

### 思路分析

是否满足重排可转换为等价问题：单词的构成字母与顺序无关，有两种解决思路（**标准化**）

+ 字母计数：统计每个字母出现次数，若一致，说明满足重排

```cpp
map<map<char,int>, int>dict; // 每个单词的字母出现次数->出现次数
```

+ 统一排序：都按升序排列，若得到相同序列，说明满足重排

```cpp
map<string, int> dict; // 标准化单词->出现次数
```

因此在标准化单词（全转为小写）后，边可按照不同思路统计次数，并记录相应到旧单词映射

+ 定义`set<string> ans;` 存储输出结果，自动按字典序排列

遍历每个标准化单词，若其出现次数为1，插入ans集合中，最后输出即可

### AC代码（C++11，map标准化，顺序无关）

#### 统一排序

```cpp
#include<bits/stdc++.h>
using namespace std;
map<string, int> dict; // 标准化单词->出现次数
map<string, string> trans; // 单词字母出现次数->原单词
set<string> ans; // 存储输出结果，按字典序排列
string s, st;
int main() {
    while (cin >>s && s!= "#") {
        st = s;
        for (auto& ch : st) // 转为小写
            if (ch >= 'A' && ch <= 'Z') ch = tolower(ch); // 转为小写
        sort(st.begin(), st.end()); // 升序排列，顺序无关
        dict[st]++; // 统计次数
        trans[st] = s; // 记录原单词
    }
    for (auto p : dict) if (p.second == 1) ans.insert(trans[p.first]); // 出现次数1表示非重排单词
    for (auto& p : ans) cout <<p <<endl; // 直接输出剩下的单词
    return 0;
}
```

#### 字母计数

```cpp
#include<bits/stdc++.h>
using namespace std;
map<map<char,int>, int>dict; // 每个单词的字母出现次数->出现次数
map<map<char,int>, string> trans; // 单词字母出现次数->原单词
set<string> ans; // 存储输出结果，按字典序排列
string s, st;
int main() {
    while (cin >>s && s!= "#") {
        st = s;
        map<char, int> mp;
        for (auto& ch : st) {
            if (ch >= 'A' && ch <= 'Z') ch = tolower(ch); // 转为小写
            mp[ch] ++; // 统计每个字符出现次数
        }
        dict[mp]++; // 统计次数
        trans[mp] = s; // 记录原单词
    }
    for (auto p : dict) if (p.second == 1) ans.insert(trans[p.first]); // 出现次数1表示非重排单词
    for (auto& p : ans) cout <<p <<endl; // 直接输出剩下的单词
    return 0;
}
```

## 例题5-5 UVA12096 The SetStack Computer

### 题目大意

用集合模拟计算机操作。每执行完一个操作，输出栈顶的集合大小，操作如下：

+ `PUSH`：空集合压栈
+ `DUP`：将栈顶元素再次压栈
+ `UNION`：依次弹栈得a，b，求并集后压栈
+ `INTERSECT`：依次弹栈得a，b，求交集后压栈
+ `ADD`：依次弹栈得a，b，将a作为一个元素加入b中

### 思路分析

很好的一道题目，关键在于**如何设计递归定义的集合的数据结构**，只要能判定两个集合异同即可

#### 初步尝试

+ 很自然想到用哈希映射，根据括号和逗号位置，用类似N进制方法计算出一个值，但无奈递归定义的集合个数无限，无法使用此方法
+ 于是想用字符串直接模拟括号和逗号序列，但也过于麻烦

#### 巧妙参考

之前尝试总体思路是对的，均是为了找到一个集合的唯一标识，但不可用函数关系映射方式，这里可用手动构造id方式分配唯一标识，因为递归定义的个数无限，找不到规律且空间有限，只可手动构造，类似`malloc`申请分配地址。

因此，**模仿递归定义设计数据结构，给每个集合分配编号，然后集合中存储已有集合编号，即可实现递归定义**

```cpp
vector<set<int> > setCache; // 哈希表：集合id->集合
map<set<int>, int> setToId; // 映射：集合->id
stack<int>stk; // 栈模拟处理过程，存储集合id
```

核心实现在于id分配算法，其实现如下，若已有该集合，直接返回id；否则，分配一个新id

```cpp
int getSetId(const set<int>& _set) { // 获取set对应id，不存在则新分配一个
    if (setToId.find(_set) != setToId.end()) return setToId[_set]; // 存在
    setCache.push_back(_set); // 不存在则分配
    return setToId[_set] = setCache.size() - 1; // id/位置标号
}
```

至于集合的交并操作可用`algorithm`中的`set_union,set_intersection`实现，注意其第五个参数是构造一个存储插入的迭代器，`inserter`是特殊的插入迭代器，父类为`iterator`，`t和t.begin()`分别表示存储结果的容器和开始位置

```cpp
set_union(a.begin(),a.end(),b.begin(),b.end(),inserter(t,t.begin())); // 并集:a U b -> t
set_intersection(a.begin(),a.end(),b.begin(),b.end(),inserter(t,t.begin())); // a交b -> t
```

### 注意点

+ set_union和set_intersection的使用，注意第五个参数构造
+ 手动分配id可实现递归定义

### AC代码（C++11，手动分配id，集合交并，栈模拟）

```cpp
#include<bits/stdc++.h>
using namespace std;
vector<set<int> > setCache; // 哈希表：集合id->集合
map<set<int>, int> setToId; // 映射：集合->id
int T, n;
string cmd;
int getSetId(const set<int>& _set) { // 获取set对应id，不存在则新分配一个
    if (setToId.find(_set) != setToId.end()) return setToId[_set]; // 存在
    setCache.push_back(_set); // 不存在则分配
    return setToId[_set] = setCache.size() - 1; // id/位置标号
}
int main() {
    cin >>T;
    while (T --) {
        cin >>n;
        stack<int> stk; setCache.clear(); setToId.clear(); // 初始化
        while (n --) {
            cin >>cmd;
            if (cmd == "PUSH") stk.push(getSetId(set<int>())); // 空
            else if (cmd == "DUP") stk.push(stk.top()); // 重复
            else {
                set<int> t, a, b;
                a = setCache[stk.top()]; stk.pop();
                b = setCache[stk.top()]; stk.pop();
                if (cmd == "UNION") set_union(a.begin(),a.end(),b.begin(),b.end(),inserter(t,t.begin()));
                if (cmd == "INTERSECT") set_intersection(a.begin(),a.end(),b.begin(),b.end(),inserter(t,t.begin()));
                if (cmd == "ADD") t = b, t.insert(setToId[a]);
                stk.push(getSetId(t));
            }
            printf("%d\n", setCache[stk.top()].size());            
        }
        puts("***");
    }
    return 0;
}
```

## 例题5-6 UVA540 Team Queue

### 题目大意

有一条长队，每个人均唯一属于一个组（有编号），执行给定操作序列，输出相应结果。操作如下：

（假设长队q1）

+ `ENQUEUE x`：标号为x的人入队，若q1中存在和x属于同一组的人，则将x插入长队中同组的最后一个人之后；否则插入长队最后一个之后
+ `DEQUEUE`：长队第一个人出队
+ `STOP`：结束该测试用例

> （ps：第一次把题意给看错了，捂脸（：
>
> 错误1：只有一条队伍，而我认为每个组就是一个队伍
>
> 错误2：误把输入中每组信息当成队列中已有的人

### 思路分析

题意清晰后，问题变得简单，有多种解决思路，比较朴素的使用链表处理，但这里为了练习队列（队列也是链表实现的），采用**双队列**实现（相当于**二级索引/二维数组（队列1--第一维，队列2--第二维）**）：

+ 队列2：存储位于长队中的同一组的人
+ 队列1：存储位于长队中的组号

数据结构如下：

```cpp
queue<int> q1, q2[1010]; // 总团队队列，组内部队列
```

可定义` map<int, int> team; `存储人x的编号到组别编号，便于查询

### 注意点

+ 每个测试用例后均需一空行，包括最后一个
+ 命令判断时注意提取共性，简化代码
+ 命令判断时，由于每个命令首字母均不同，因此可直接比较首字母，提高效率
+ 由于`map`仅用于查询，也可用由哈希算法实现的`unordered_map`实现
+ 若是超时，将`cin/cout`全改为`scanf/printf`

### AC代码（C++11，双队列/二级索引/二维数组）

```cpp
#include<bits/stdc++.h>
using namespace std;
int t, n, x, num=0;
string cmd;
int main() {
    while (cin >>t && t != 0) {
        map<int, int> team; // 编号x->组别编号
        for (int i = 0; i < t; i ++) { // 组别编号
            cin >>n;
            for (int j = 0; j < n; j ++) { // 每一组
                cin >>x;
                team[x] = i;
            }
        }
        printf("Scenario #%d\n", ++num); // 输出测试用例编号
        queue<int> q1, q2[1010]; // 总团队队列，组内部队列
        while (cin >>cmd && cmd[0] != 'S') {
            if (cmd[0] == 'E') { // 入队
                cin >>x;
                if (q2[team[x]].empty()) { // 组内不存在队员
                    q1.push(team[x]); // 进入总队列
                }
                q2[team[x]].push(x); // 组内不存在队员，加入总队列最后
            }
            else if (cmd[0] == 'D') { // 出队
                printf("%d\n", q2[q1.front()].front());
                q2[q1.front()].pop();
                if (q2[q1.front()].empty()) q1.pop(); // 维护总队列
            }
        }
        puts("");
    }
    return 0;
}
```

## 例题5-7 UVA136 Ugly Numbers

### 思路分析

直接暴力求解会超时，因此可采用优先队列构造法

从1开始，对于x，2x，3x，5x均为丑数

因此，初始将1推入优先队列，每次从优先队列取出最小值，然后2x,3x,5x推入优先队列

有些数可能会重复构造，因此用set去重

### 注意点

+ 可能会溢出，用long long类型
+ 优先队列定义优先级

### AC代码（C++11，优先队列，set去重，丑数构造）

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long LL;
int main() {
    LL a[3] = {2,3,5}, t, num=0;
    priority_queue<LL, vector<LL>, greater<LL> > pq; // 优先队列
    set<LL> _set; // 判重
    pq.push(1L); _set.insert(1L); // 第一轮
    while (true) {
        t = pq.top(); pq.pop(); num ++;
        if (num == 1500) break;
        for (int i = 0; i < 3; i ++) // x,2x,3x,5x构造丑数
            if (_set.find(t*a[i]) == _set.end()) {
                pq.push(t*a[i]);
                _set.insert(t*a[i]);
            }
    }
    printf("The 1500'th ugly number is %lld.\n", t);
    return 0;
}
```

## 例题5-8 UVA400 Unix ls

### 题目大意

给若干文件名，按字典序排列后，按列输出。其中每行60个字符，假设文件名最长长度为len，最后一列所占宽度为len，其余列占宽度为len+2，要求行数尽可能少。

### 思路分析

使用`set<string>_set`可自动按字典序排列

本题关键在于计算输出的行列数，假设文件名中最长长度为len，n为列数，那么总行列宽计算公式如下：

```cpp
总列宽=(len+2)*(n-1)+len=(len+2)*n-2
行宽= ceil(n/列宽) // 向上取整
```

+ 可用`%-len`来控制输出对齐格式

### 注意点

+ 最后一列对齐宽度为最大长度，其余列需+2
+ 左对齐，按列输出

### AC代码（C++11，按列输出，行列计算）

```cpp
#include<bits/stdc++.h>
using namespace std;
int n;
string s, format;
int main() {
    while (cin >>n) {
        int maxlen=-1, len, colNum=1, rowNum;
        set<string> _set;
        for (int i = 0; i < n; i ++) {
            cin >>s; _set.insert(s);
            maxlen = max(maxlen, (int)s.size()); // 最长长度
        }
        while ((maxlen+2)*colNum-2 <= 60) colNum++; // 列数
        colNum --; rowNum = (int)ceil((float)n / colNum); // 行数
        vector<string> fnames;
        fnames.insert(fnames.begin(), _set.begin(), _set.end()); // set转为vector
        printf("%s\n", string(60,'-').c_str()); // 60个-
        for (int i = 0; i < rowNum; i ++) { // 遍历输出
            for (int j = 0; j < colNum && j*rowNum+i < n; j ++) {
                len = (j == colNum-1) ? maxlen : maxlen+2; // 最后一列对其宽度为maxlen
                format = "%-"+to_string(len)+"s"; // 输出格式
                printf(format.c_str(), fnames[j*rowNum+i].c_str());
            }
            puts("");
        }
    }
    return 0;
}
```

## 例题5-9 UVA1592 Database

### 题目大意

给出n*m的表格，判断是否存在两行，他们对应存在两列相同元素，即`(r1,c1)=(r2,c1)；(r1,c2)=(r2,c2)`

### 思路分析

暴力枚举任意两行两列时间复杂度O(n^4)，会超时。因此进行如下优化设计：

枚举任意两列c1,c2，对于这两列，遍历每一行，将两列中的元素用二元组记录，存于map中，若后需遍历发现重复二元组，则表示找到结果，其时间复杂度为O(m\*m\*n*logn)

若直接用map存储字符串，效率低下，可手动给每个字符串分配编号，map中只需存放其编号即可（二级索引）

```cpp
map<string, int> idmp; // 字符串->id
vector<int> table[n+1]; // 表中存放字符串对应的id
```

同时，为了便于输出目标对应的行号，定义如下映射（将二元组置于key是便于查找）

```cpp
map<pair<int,int>, int> pos; // 两列对应字符串标号->行
```

+ 可用`stringstream与getline实现以,分割字符串`

```cpp
getline(cin, s); stringstream input(s); // 字符串流
while (getline(input, st, ',')) table[i].push_back(getId(st));
```

### AC代码（C++11，map优化，行列同素求解）

```cpp
#include<bits/stdc++.h>
using namespace std;
int n, m;
string s, st;
map<string, int> idmp; // 字符串->id
int getId(string s) { // 获取字符串id，若已存在，直接返回，否则分配id
    if (idmp.find(s) == idmp.end()) idmp.insert({s, idmp.size()}); // 不存在
    return idmp[s];
}
int main() {
    while (cin >>n >>m) {
        getchar(); vector<int> table[n+1]; idmp.clear(); // 初始化！！！
        for (int i = 0; i < n; i ++) {
            getline(cin, s); stringstream input(s);
            while (getline(input, st, ',')) table[i].push_back(getId(st));
        }
        bool isPNF = true; // 标记是否为PNF
        for (int i = 0; i < m-1 && isPNF; i ++) { // 遍历任意两列
            for (int j = i+1; j < m && isPNF; j ++) {
                map<pair<int,int>, int> pos; // 两列对应字符串标号->行
                for (int k = 0; k < n && isPNF; k ++) { // 每一行
                    if (pos.find({table[k][i],table[k][j]}) == pos.end()) {
                        pos[{table[k][i],table[k][j]}] = k;
                    }
                    else {
                        printf("NO\n%d %d\n%d %d\n", pos[{table[k][i],table[k][j]}]+1, k+1, i+1, j+1);
                        isPNF = false;
                    }
                }
            }
        }
        if (isPNF) printf("YES\n");
    }
    return 0;
}
```

## 例题5-10 UVA207 PGA Tour Prize Money

## 例题5-11 UVA814 The Letter Carrier's Rounds

### 题目大意

给出每个城市存在的代理名字，然后模拟发送邮件，输出相应信息。

+ 注意当邮箱中存在多个发送者时，代理名字相同的需一次性处理，而代理名字需按照**输入的顺序输出，而不是字典序**
+ 多个发送者中存在同样的接受者，需去重！！！
+ 输出注意前置5个空格

### 思路分析

定义`map<string, unordered_set<string> > mp; `表示地址->代理名的映射

当发送队列输入后可用`stringstream`分割出各代理名和城市名，注意去重，然后按照输入顺序遍历每个城市名，判断是否存在对应代理

### AC代码（C++11，字符串处理，读题）

```cpp
#include<bits/stdc++.h>
using namespace std;
map<string, unordered_set<string> > mp; // 地址->人名
string s, addr, name, st;
int n;
int main() {
    while (cin >>s) {
        do {
            cin >>addr >>n;
            for (int i = 0; i < n; i ++) cin >>name, mp[addr].insert(name);
        } while (cin >>s && s[0] != '*');
        getchar(); // 吸收多余换行
        while (getline(cin, s) && s[0] != '*') {
            map<string, vector<string> > mp2; // 地址->人名
            vector<string> addr; // 按输入顺序存储地址，便于输出
            int cnt = 0;
            string sendaddr, sendname, saddr, sname;
            stringstream input(s);
            while (input >>st) {
                cnt ++;
                int i = st.find('@'); // 找到@位置下标
                saddr = st.substr(i+1); sname = st.substr(0,i); // 分割字符串
                if (cnt == 1) sendaddr = saddr, sendname = sname; // 第一个为发送者
                else { // 其余为接受者
                    if (mp2.find(saddr) == mp2.end()) addr.push_back(saddr); // 地址输入顺序存储 !!!
                    mp2[saddr].push_back(sname); // 地址->名字
                }
            }
            getline(cin, s); //读取*
            string data; // 存储数据文本
            while (getline(cin, s) && s[0] != '*') data += "     "+s + "\n"; // 拼接数据，前置5个空格
            for (auto p : addr) { // 每个发送地址
                printf("Connection between %s and %s\n", sendaddr.c_str(), p.c_str());
                printf("     HELO %s\n     250\n", sendaddr.c_str());
                printf("     MAIL FROM:<%s@%s>\n     250\n", sendname.c_str() ,sendaddr.c_str());
                int num = 0; set<string> _set; // 去重
                for (auto q : mp2[p]) { // 每个人名
                    if (_set.find(q) == _set.end()) _set.insert(q); // 去除重复人名！！！
                    else continue;
                    printf("     RCPT TO:<%s@%s>\n", q.c_str() ,p.c_str());
                    if (mp[p].find(q) != mp[p].end()) { // 存在此人
                        num ++; // 统计成功发送人数
                        printf("     250\n");
                    }                    
                    else printf("     550\n");
                }
                if (num != 0) printf("     DATA\n     354\n%s     .\n     250\n", data.c_str()); // 数据发送成功
                printf("     QUIT\n     221\n");
            }
        }
        break; // 直接退出循环
    }
    return 0;
}
```

## 例题5-12 UVA221 Urban Elevations

### 题目大意

在几何数学中的笛卡尔坐标系上给出每个矩形块左下角坐标，x轴方向和y轴方向长度和z轴高度（均为**实数**），求正视图能被看见的矩形块，**输出时x小者优先，若x相同，则y小者优先**。

### 思路分析

用结构体存储每个矩形块，利用sort，很容易按照输出顺序排列。关键在于如何判断矩形块是否可见。

朴素想法是遍历每个x，判断当前矩形状态，然而x是实数，有无穷多个，只好放弃，而离散化技巧正好将无限状态转为有限状态，具体如下

#### 离散化技巧

为了解决x的无限问题，可将每个矩形的两个x坐标收集起来，去重排序，可以得到有限个线段区间，因为包含了所有矩形的x坐标，因此，**相邻两点之间对于任意一个矩形来说，必定是完全的可见/不可见**，因此，改区间的任何一个点都是等效的。

对于任意一个矩形，仅需遍历每条线段即可判断是否可见，完成有限化

>  那么如何判断一个矩形在当前线段区间可见呢？
>
> 问题等价于：如何判断一个矩形是否会被挡住？

一个矩形A会被挡住**当且仅当**存在满足以下3点的矩形B：

+ 其y坐标**小于**当前矩形A的y坐标（更南面）
+ 其高度**大于等于**当前矩形高度

+ 当前线段区间包含于矩形B的横坐标区间

### 注意点

+ 输入的坐标，长宽高均为实数，即可能出现浮点数
+ 两个测试用例输出间需有空行

### AC代码（C++11，离散化，sort）

```cpp
#include<bits/stdc++.h>
using namespace std;
struct Building {
    int id;
    double x, y, w, d, h;
    bool operator < (const Building& b) const { // 重载<;排序使用
        return (x < b.x) || (x == b.x && y < b.y); // x小优先；y小优先 
    }
} b[200]; // 存放建筑
int n, num=0;
bool isVisible(int i, double midx) { // 判断建筑i在midx所在区间是否可见
    if (!(b[i].x <= midx && b[i].x+b[i].w >= midx)) return false; // 不在区间
    for (int j = 0; j < n; j ++) {
        if (b[j].h >= b[i].h && b[j].y < b[i].y // 更高&&y更小&&存在于此区间
        && b[j].x <= midx && b[j].x+b[j].w >= midx) return false; // 建筑i被j挡住
    }
    return true; // 不被挡住
}
int main() {
    while (cin >>n && n != 0) {
        if (num != 0) puts(""); // 相邻测试输出的空行
        printf("For map #%d, the visible buildings are numbered as follows:\n", ++num);
        set<double> setx;
        for (int i = 0; i < n; i ++) {
            scanf("%lf %lf %lf %lf %lf", &b[i].x, &b[i].y, &b[i].w, &b[i].d, &b[i].h);
            b[i].id = i+1; // 标号，出现顺序
            setx.insert(b[i].x); setx.insert(b[i].x+b[i].w); // 两个x坐标，去重排序
        }
        sort(b, b+n); // 按输出顺序排列
        vector<double> x(setx.begin(), setx.end()); // set转为vector
        int cnt = 0; // 控制输出
        for (int i = 0; i < n; i ++) { // n个建筑
            for (int j = 0; j < x.size()-1; j ++) { // 每一段区间
                if (isVisible(i, (x[j]+x[j+1])/2)) { // x[j]和x[j+1]中任意一点状态一样
                    cnt ++;
                    printf("%s%d", cnt != 1 ? " ":"", b[i].id); // 前置空格
                    break;
                }
            }
        }
        puts("");
    }
    return 0;
}
```

## 习题5-1 UVA1593 Alignment of Code

### 题目大意

给出若干行字符串，每行单词间以若干个空格分隔，先要求以**最小间隔对齐每列单词**

### 思路分析

读入每行后，用`stringstream`进行分割得到每行对应单词集合，统计每一列中单词的最长长度maxlen。如果是最后一列，直接输出，否则对齐宽度为maxlen+1（加1是最小间隔）

### AC代码（C++11，stringstream分割）

```cpp
#include<bits/stdc++.h>
using namespace std;
string s, st;
vector<string> lines[1010]; // 每一行的单词
int row=0, maxcol[1010] = {0}; // 行号，每列单词最长值
int main() {
    while (getline(cin ,s)) {
        stringstream input(s);
        while (input >>st) { // 空格分割
            maxcol[lines[row].size()] = max(maxcol[lines[row].size()], (int)st.size()); // 取最大值
            lines[row].push_back(st); // 保存单词
        }
        row ++; // 行号
    }
    for (int i = 0; i < row; i ++) { // 按行遍历输出
        for (int j = 0; j < lines[i].size(); j ++) {
            st = lines[i][j]; 
            if (j != lines[i].size()-1) st += string(maxcol[j]-st.size()+1, ' '); // 补空格
            printf("%s", st.c_str());
        }
        puts("");
    }
    return 0;
}
```

## 习题5-2 UVA1594 Ducci Sequence

### 题目大意

给定n元组`(a1,a2,...,an),ai均为整数`，得到下一个序列为`(|a1-a2|,|a2-a3|,...,|an-a1|)`，如此循环下去，必定会出现**全零序列或重复序列**。

现要求判断给定序列是全零序列还是重复序列（有趣的Ducii结果）

### 思路分析

用vector模拟元组序列，`set<vector<int>>`用于元组序列判重，完成重复序列发现

### AC代码（C++11，set去重）

```cpp
#include<bits/stdc++.h>
using namespace std;
int T, n, t;
int main() {
    scanf("%d", &T);
    while (T--) {
        scanf("%d", &n);
        vector<int> a, b(n), zero(n, 0);
        for (int i = 0; i < n; i ++) { // 输入n元组
            scanf("%d", &t);
            a.push_back(t);
        }
        set<vector<int> > _set; // 集合判重
        int flag = 0; // 标记结果
        while (flag == 0) {
            if (a == zero) flag = 1; // 全0
            else if (_set.find(a) != _set.end()) flag = 2; // 重复
            else {
                _set.insert(a);
                for (int i = 0; i < n; i ++) b[i] = abs(a[i] - a[(i+1)%n]); // ducci下一个序列
                a = b;
            }
        }
        printf("%s\n", flag == 1 ? "ZERO" : "LOOP");
    }
    return 0;
}
```

## 习题5-3 UVA10935 Throwing cards away I

### 题目大意

桌上有一叠牌，自上而下编号为1~n。若桌上牌数大于1张，那么丢弃一张顶部牌后，再将现在的顶部牌移到最后。要求给出模拟过程和最终剩余的牌号

### 思路分析

典型队列模拟，丢弃即出队，移到最后即入队，但队列大小为1时停止操作

### 注意点

+ 注意n=1时特例，`Discarded cards:`后无需空格

### AC代码（C++11，队列模拟）

```
#include<bits/stdc++.h>
using namespace std;
int n;
int main() {
    while (cin >>n && n != 0) {
        printf("Discarded cards:");
        queue<int> q;
        for (int i = 1; i <= n; i ++) q.push(i);
        while (q.size() != 1) {
            printf("%s%d", q.front() == 1 ? " " : ", ", q.front()); // 第一个退出无输出,
            q.pop();
            q.push(q.front()); q.pop(); // 头入队后删除
        }
        printf("\nRemaining card: %d\n", q.front());
    }
    return 0;
}
```

## 习题5-4 UVA10763 Foreign Exchange

### 题目大意

给定n个学生的出发点A和目的地B，若每个学校的被作为出发点和目的地的次数相同，则项目可以进行；否则不可

### 思路分析

定义`map<int, int> cnt;`，其中`cnt[i]`表示学校i对应的人数增减变化量，若有人把学校i作为出发地，则`cnt[i]--`；若作为目的地，则`cnt[i]++`。最终若是每个学校变化量均为0，说明项目可行；否则不可行

### AC代码（C++11，哈希表/map）

```cpp
#include<bits/stdc++.h>
using namespace std;
int n, a, b;
int main() {
    while (cin >>n && n != 0) {
        map<int, int> cnt; // 每个学校对应的人数增减变化量
        for (int i = 0; i < n; i ++) {
            scanf("%d %d", &a, &b);
            cnt[a] --; // 出去-
            cnt[b] ++; // 进来+
        }
        bool isWork = true; // 标记是否可行
        for (auto p : cnt) {
            if (p.second != 0) { // 出现非0，说明有人不匹配
                isWork = false;
                break;
            }
        }
        printf("%s\n", isWork ? "YES" : "NO");
    }
    return 0;
}
```

## 习题5-5 UVA10391 Compound Words

### 题目大意

给定若干单词，按字典序输出由两个单词拼接而成的单词

### 思路分析

用set存储所有单词，枚举每个单词word，遍历word的所有左右子串组合情况，若左右子串均在set中，说明符合题意。时间复杂度`O(n*len*len)，len为单词长度，n为单词总个数`

### AC代码（C++11，set，string子串）

```cpp
#include<bits/stdc++.h>
using namespace std;
string s;
set<string> _set; // 查询
int main() {
    while (cin >>s) _set.insert(s);
    for (auto p : _set) {
        bool isCpdword = false;
        for (int i = 0; i < p.size()-1 && !isCpdword; i ++) { // 遍历所有左右组合
            if (_set.find(p.substr(0,i+1)) != _set.end() && _set.find(p.substr(i+1)) != _set.end()) // 左右字符串均存在 
                isCpdword = true;
        }
        if(isCpdword) printf("%s\n", p.c_str());
    }
    return 0;
}
```

## 习题5-6 UVA1595 Symmetry

### 题目大意

在笛卡尔坐标系上给定n个点的x,y坐标，判断是否左右对称

### 思路分析

由于是判定性问题，只要能判别图像是否左右对称即可，无需确认关于哪条垂直线对称，那么问题可以这样解决：

定义`map<int, vector<int> > mp;` 表示 y->x坐标，再将x坐标升序排列，对于每一行（y），若两侧x坐标和sum均相等，那么图像必定对称，若x坐标个数为奇数，那么中间点坐标的2倍等于sum

+ 用map而不用哈希表是因为不知道y坐标的上限
+ 用vector而不用set是为了使用下标索引

### 注意点

+ 避免使用除法，只计算两点x坐标和效果等效
+ 注意一行中x个数为奇数时，不可忽略中间坐标判断

### AC代码（C++11，对称性判断）

```cpp
#include<bits/stdc++.h>
using namespace std;
int T, n, x, y;
int main() {
    cin >>T;
    while (T --) {
        cin >>n;
        map<int, vector<int> > mp; // y->x坐标
        for (int i = 0; i < n; i ++) {
            scanf("%d %d", &x, &y);
            mp[y].push_back(x);
        }
        set<int> _set; // 最终大小为1表示左右对称
        for (auto p : mp) {
            sort(p.second.begin(), p.second.end()); // x坐标升序排列
            int right = (p.second.size() % 2 == 0) ? p.second.size()/2 : p.second.size()/2+1;
            for (int i = 0; i < right; i ++) 
                _set.insert(p.second[i]+p.second[p.second.size()-i-1]); // 两侧点之和
        }
        printf("%s\n", _set.size() == 1 ? "YES" : "NO");
    }    
    return 0;
}
```

## 习题5-7 UVA12100 Printer Queue

### 题目大意

有一个打印队列，每个打印任务优先级为1-9，按如下规则打印：

+ 若队首优先级不是最高，则移到队尾；
+ 否则打印队首后，令其出队

现计算**完全打印**第n个位置（0~n-1）需多长时间？

### 思路分析

定义`Job`，其中pos和pty分别表示打印任务的在队列中的位置和打印优先级

```cpp
struct Job {
    int pos, pty; // 位置，优先级
}job;
```

定义`queue<Job> q;`模拟排队过程，定义`map<int, int> mp; `记录每个优先级对应的人数，由于，map自动按key升序排列，因此，map最后一个元素的优先级一定是队列最高的。

+ 当队首优先级小于队列中最高优先级时，后移到队尾；

+ 否则，若队首位置等于目标位置，则结束；若不等，则打印退队，map对应优先级个数-1

### AC代码（C++11，queue，map）

```cpp
#include<bits/stdc++.h>
using namespace std;
struct Job {
    int pos, pty; // 位置，优先级
}job;
int T, n, m;
int main() {
    scanf("%d", &T);
    while (T --) {
        scanf("%d %d", &n, &m);
        queue<Job> q;
        map<int, int> mp; // 每个优先级对应的人数
        for (int i = 0; i < n; i ++) {
            scanf("%d", &job.pty);
            job.pos = i; // 位置，0开始
            q.push(job);
            mp[job.pty] ++; // 计算该优先级人数
        }
        int num = 0;
        while (!q.empty()) {
            if (q.front().pty < mp.rbegin()->first) q.push(q.front()), q.pop(); // 有优先级高者，后移
            else if (q.front().pos == m) break; // 目标位置可输出
            else { // 非目标位置
                if (mp[q.front().pty] == 1) mp.erase(q.front().pty); // 维护mp
                else mp[q.front().pty] --;
                q.pop(); num ++;
            }
        }
        printf("%d\n", num+1);
    }
    return 0;
}
```

## 习题5-8 UVA230 Borrowers

### 题目大意

书库有若干本书，每本书有作者和书名两个信息，排列规则：作者字典序小者优先，若相同，则书名字典序小者优先。现有三种操作：

+ `BORROW title`：借书
+ `RETURN title`：还书
+ `SHELVE`：将目前已还的书按排列规则显示其所在的相对位置（具体格式见原题）

给定一系列操作，处理相应操作，给出相应信息

### 思路分析

为了记录书本顺序，定义结构体`Book`如下，其中重载`<`以实现题目要求的排序规则

```cpp
struct Book {
    string aut, tit; // 作者，书名
    bool operator < (const Book& b) { // sort排序使用，作者字典序小者优先，若相同，书名优先
        return aut < b.aut || (aut == b.aut && tit < b.tit);
    }
}book;
```

定义`vector<Book> bk;` 存储书本信息，利用sort进行排序后，定义`map<string, int> mp; `表示书名->编号，因此每个书名唯一对应一个编号，该编号也表示书的排列顺序。

再定义两个`set<int>lib,ret`分别存储目前图书库存和已还图书的编号，由于set自动有序，遇见显示操作时直接顺序遍历ret，按要求输出相应信息即可

### 注意点

+ 注意输出书名时要加双引号
+ 注意若已还图书处于第一位，输出`first`等相应信息
+ set必须用`iterator--`的方式访问前一个元素，而无法用`iterator-1`，因为他是关联容器，不是线性容器

### AC代码（C++11，分级sort,set,map）

```cpp
#include<bits/stdc++.h>
using namespace std;
struct Book {
    string aut, tit; // 作者，书名
    bool operator < (const Book& b) { // 排序使用，作者字典序小者优先，若相同，书名优先
        return aut < b.aut || (aut == b.aut && tit < b.tit);
    }
}book;
string s, st, op, tit;
vector<Book> bk; // 存书列表
map<string, int> mp; // 书名对应编号
int main() {
    while (getline(cin, s) && s[0] != 'E') {
        int i = s.find('"', 1); // 找到第二个引号位置
        book.tit = s.substr(1, i-1); // 书名
        book.aut = s.substr(i+5); // 作者
        bk.push_back(book);
    }
    sort(bk.begin(), bk.end()); // 排序，作者字典序小优先，若相同，书名字典序小者优先
    set<int> lib, ret; // 保存图书库存和还书集合
    for (int i = 0; i < bk.size(); i ++) {
        mp[bk[i].tit] = i; // 书名对应编号id
        lib.insert(i); // 图书库存
    }
    while (getline(cin, s) && s[0] != 'E') { // 借/还/显示操作处理
        if (s[0] == 'S') { // 显示输出
            for (auto r : ret) { // 遍历还书集合
                auto p = lib.find(r); // 当前书本所在位置
                printf("Put \"%s\" ", bk[r].tit.c_str());
                printf("%s\n", p == lib.begin() ? "first" : ("after \""+bk[*(--p)].tit+"\"").c_str());
            }
            puts("END"); ret.clear(); // 清空为下一次准备
            continue; // 继续读入
        }
        op = s.substr(0, 6); // 操作
        tit = s.substr(8, s.size()-8-1); // 书名
        if (op[0] == 'B') lib.erase(mp[tit]); // 借书，从lib删除
        else if (op[0] == 'R') { // 还书
            ret.insert(mp[tit]); // 加入还书集合
            lib.insert(mp[tit]); // 加入lib集合
        }
    }
    return 0;
}
```

## 习题5-9 UVA1596 Bug Hunt

### 题目大意

给若干行数组定义和赋值，求第一个出现bug的行号（从1开始），bug判定规则如下：

+ 数组下标超过定义限制，比如定义`a[10]`，那么`a[0-9]`合法，其余均非法
+ 需要引用数组的值时（即作为右值），它必须先被赋值，如下所示

```cpp
a[10] // 定义数组a，长度10
a[1]=2 // 合法赋值
a[2]=a[1] //右边合法引用a[1]
a[a[1]]=3 // 左边合法引用a[1]
a[2]=a[4] ////右边非法引用a[4]
a[a[4]]=3 // 左边非法引用a[4]
```

### 思路分析

本题关键在于**数组名和下标表达式的分割**和**下标表达式计算**

可定义如下数据结构，分别记录数组的定义长度和对应的已经被赋值的元素

```cpp
map<string, int> arrlen; // 数组名->长度
map<string, map<int,int> > arr; // 数组名->下标->值（模拟二维数组）
```

+ 使用`string`的`find`和`substr`可轻易分割数组名和下标表达式
+ 利用栈或者递归可完成表达式计算

细节比较多，但不难，认真处理细节即可

### AC代码（C++11，字符串处理）

```cpp
#include<bits/stdc++.h>
using namespace std;
map<string, int> arrlen; // 数组名->长度
map<string, map<int,int> > arr; // 数组名->下标->值（模拟二维数组）
string s, sl, sr;
pair<string, string> getNameExpr(string s) { // 获取数组名和下标
    int i = s.find('[');
    return {s.substr(0, i), s.substr(i+1, s.size()-i-2)};
}
int eval(string s) { // 对s进行求值，若有bug返回-1，否则返回正确值
    int idx;
    stack<string> stk; // 存储数组名
    string st = s;
    while (!isdigit(st[0])) { // 依次分割提取数组表达式
        pair<string,string> pr = getNameExpr(st);
        stk.push(pr.first);
        st = pr.second;
    }
    idx = stoi(st); // 最内层下标
    while (!stk.empty()) { // 出栈求值
        st = stk.top();
        if (arrlen[st] <= idx || arr[st].find(idx) == arr[st].end()) break; // 下标溢出/未赋值
        stk.pop();
        idx = arr[st][idx]; // 新的长度
    }
    return stk.empty() ? idx : -1; // -1表示有bug
}
int main() {
    bool isOver = false; // 判断是否结束读取测试用例
    while (!isOver) {
        arrlen.clear(); arr.clear(); isOver=true;// 初始化
        int line=0; bool isBug=false;
        while (cin >>s && s[0] != '.') {
            if (isBug) continue; // 找到bug，继续读完即可
            int i = s.find('='); isOver=false; line ++;
            if (i == string::npos) { // 定义表达式
                pair<string,string> pr = getNameExpr(s);
                arrlen[pr.first] = stoi(pr.second); // 数组长度
            }
            else { // 赋值表达式
                sl = s.substr(0,i); sr = s.substr(i+1); // 左右表达式
                int rval = eval(sr); // 右值
                if (rval != -1) { // 右部表达式合法
                    pair<string,string> pr = getNameExpr(sl);
                    int idx = eval(pr.second);
                    if (idx != -1 && idx < arrlen[pr.first]) arr[pr.first][idx] = rval; // 下标表达式非法/溢出
                    else isBug = true; // 出现bug
                }
                else isBug = true;
            }
        }
        if (!isOver) printf("%d\n", isBug ? line : 0); // 未结束均需输出
    }
    return 0;
}
```

## 习题5-10 UVA1597 Searching the Web

### 题目大意

给定若干篇有编号的文章，构造一个搜索引擎，处理查询命令。

#### 搜索引擎构造

原题描述中的**Figure-1**说得很清楚，即对于每个单词，将它出现的地方以**（文章编号，行号）**形式记录。

同时题目对问题做了简化：

+ 每个单词仅包含26个字母，其余字符（包括**数字，连字符**）均可看成空格
+ 不考虑时态问题，大小不敏感（全转为小写）

#### 命令格式

**输出时均按输入文章时的顺序，注意单词所在文章和行的区别**

+ `term`：直接输出term所在行
+ `term1 AND term2`：求两个单词所在**文章交集**，将**交集文章中对应的行全部输出**
+ `term OR term`：求两个单词所在**行的并集**
+ `NOT term`：将不包含单词的文章**整篇输出**

### 算法设计

定义如下数据结构分别存储**每个单词对应的文章id和行号**，**每篇文章的每一行**

```cpp
map<string, vector<pair<int,int> > > mp; // 单词->(文章id,行号)
vector<string> doc[110]; // 文本
```

在读入每行字符串时，将非26字母表中的字符全部转为空格，然后用`stringstream`分割得到每个单词对应位置，较容易完成搜索引擎构造。

对于**与或非**命令可用**集合交并补**方式处理，比较简单

### 注意点

+ 按文章输入顺序输出相应行/文章
+ 不同文章的句子需10个`-`分隔
+ 提取不同命令的共性，简化代码
+ 在遍历`set/map`过程中，不要进行删除操作，否则会`RE`
+ 先写结构，再逐步细化，瀑布式开发，写一点测试一点

### AC代码（C++11，字符串处理，map）

```cpp
#include<bits/stdc++.h>
using namespace std;
int N, M;
string s, st, t1, t2;
map<string, vector<pair<int,int> > > mp; // 单词->(文章id,行号)
vector<string> doc[110]; // 文本
int main() {
    cin >>N; getchar(); // 吸收换行
    for (int i = 0; i < N; i ++) { // 所有文本 
        int line=0; // 行号
        while (getline(cin ,s) && s[0] != '*') {
            doc[i].push_back(s); // 文本i的第line行
            for (auto& ch : s) 
                if (!isalpha(ch)) ch = ' '; // 非字母全换为空格
                else ch = tolower(ch); // 字母均转为小写
            stringstream input(s); // 空格分割
            while (input >>s) mp[s].push_back({i, line}); // word所在文本编号和行号
            line ++; // 行号增加
        }
    }
    cin >>M; getchar();
    while (M --) { // 查询处理
        getline(cin, s); // 查询
        int i = s.find(' '), j = s.rfind(' '); // 从首，尾开始遇见的第一个空格位置
        set<pair<int,int> > out; // 输出集合
        if (i == string::npos) out.insert(mp[s].begin(), mp[s].end());  // term
        else { // 与或非
            if (s[0] == 'N') { // NOT
                t1 = s.substr(i+1);
                set<int> _set;
                for (int i = 0; i < N; i ++) _set.insert(i); // 所有文章id
                for (auto p : mp[t1]) _set.erase(p.first); // 删除包含t1的文章id
                for (auto p : _set) { // 输出整篇文章
                    for (auto line : doc[p]) cout <<line <<endl; // 打印不包含t1的所有整篇文章
                    if (p != *_set.rbegin()) cout <<"----------"<<endl; // 不同文章需间隔
                }
                if (_set.empty()) cout <<"Sorry, I found nothing.\n"; // 空处理
            }
            else { // AND,OR
                t1 = s.substr(0, i); // term1
                t2 = s.substr(j+1); // term2
                out.insert(mp[t1].begin(), mp[t1].end()); // 求并集 
                out.insert(mp[t2].begin(), mp[t2].end());
                if (j - i - 1 == 3) { // AND，求交集
                    set<int> set1, set2;
                    for (auto p : mp[t1]) set1.insert(p.first); // t1所在文本
                    for (auto p : mp[t2]) if (set1.find(p.first) != set1.end()) set2.insert(p.first); // 求交集文本
                    auto tmp = out; // 先备份，再删除；若边删边遍历会RE
                    for (auto p : tmp) if (set2.find(p.first) == set2.end()) out.erase(p); // 删除不相交的
                }
            }
        }
        int pre=-1; // 控制间隔输出
        if (s[0] != 'N') { // 非NOT语句统一输出
            for (auto p : out) {
                if (pre != -1 && pre != p.first) cout <<"----------"<<endl; // 两个不同文章之间
                pre = p.first;
                cout <<doc[p.first][p.second] <<endl;
            }
            if (out.empty()) cout <<"Sorry, I found nothing.\n";
        }
        cout <<"==========" <<endl;
    }
    return 0;
}
```

## 习题5-11 UVA12504 Updating a Dictionary

### 题目大意

给新旧字典（键值对形式），按字典序输出增加，删除，修改的键值

### 思路分析

定义如下数据结构，分别表示旧，新字典，因为**值可能非常大，所以也用string存储**

```
map<string,string> mpa, mpb; // 旧新字典
```

接着定义`set<string> del, chg, inc;`分别表示删除，改变，增加的集合，其自动按字典序排列，因此结束后可直接输出，其伪代码如下：

```cpp
for 枚举mpa中的每个元素p{
	if p.key不存在于mpb{
		将p.key加入删除集合
	}
	else {
		if p.value 不同于mpb中的value {
			将p.ley加入改变集合
		}
		删除mpb中的p.key // 剩余的即为增加的
	}
}
```

### 注意点

+ 每一个测试用例后均输出空行，包括最后一个

### AC代码（C++11，map）

```cpp
#include<bits/stdc++.h>
using namespace std;
int T;
string sa, sb;
void getDict(map<string,string>& mp, string s) { // 分割得到字典
    for (auto& ch : s) // 将{},:替换为空格
        if (ch == '{' || ch == '}' || ch == ',' || ch == ':') ch = ' ';
    stringstream input(s);
    string sk, sv;
    while (input >>sk >>sv ) mp[sk] = sv; // stringstream以空格分割
}
void print(char mess, const set<string>& _set) { // 打印结果
    if (_set.empty()) return; // 空立刻返回
    cout <<mess;
    for (auto p : _set) printf("%s%s", p.c_str(), p == *_set.rbegin() ? "\n" : ",");
}
int main() {
    cin >>T;
    for (int i = 0; i < T; i ++) {
        cin >>sa >>sb;
        map<string,string> mpa, mpb; // 旧新字典
        getDict(mpa, sa); getDict(mpb, sb);
        set<string> del, chg, inc; // 删除，改变，增加
        for (auto p : mpa) { // 遍历旧字典
            if (mpb.find(p.first) == mpb.end()) del.insert(p.first); // 删除
            else { // 存在
                if (mpa[p.first] != mpb[p.first]) chg.insert(p.first); // 改变
                mpb.erase(p.first); // 删除mpa中存在的
            }
        }
        for (auto p : mpb) inc.insert(p.first); // 未被删除的就是增加的
        print('+', inc); print('-', del); print('*', chg); // 输出结果
        if (inc.empty() && del.empty() && chg.empty()) puts("No changes");
        puts(""); // 空行
    }
    return 0;
}
```

## 习题5-12 UVA511 Do You Know the Way to San Jose

## 习题5-13 UVA822 Queue and A

## 习题5-14 UVA1598 Exchange

## 习题5-15 UVA12333 Revenge of Fibonacci

## 习题5-16 UVA212 Use of Hospital Facilities
