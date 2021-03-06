---
title: js基础语法
author: Walter Mitty
date: 2019-05-08
hero: ./images/hero.jpg
excerpt: With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of this incredible tool.
---

javascript 基础语法
#javascript

对象的所有键名都是字符串（es6 又引入了 symbol 值也可以作为键名），所以加不加引号都可以。上面的代码也可以写成下面这样。

```javascript
var obj = {
  foo: "hello",
  bar: "world"
};
```

如果键名是数值，会被自动转为字符串。

对象的属性之间用逗号分隔，最后一个属性后面可以加逗号（trailing comma），也可以不加。

```javascript
var obj = {
  p: 123,
  m: function () { ... },
}
```

上面的代码中，m 属性后面的那个逗号，有没有都可以。

属性可以动态创建，不必在对象声明时就指定。

```javascript
var obj = {};
obj.foo = 123;
obj.foo; // 123
```

上面代码中，直接对 obj 对象的 foo 属性赋值，结果就在运行时创建了 foo 属性。

---

javascript 引擎的做法是，如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。

```javascript
{
  console.log(123);
} // 123
```

上面的语句是一个代码块，而且只有解释为代码块，才能执行。

如果要解释为对象，最好在大括号前加上圆括号。因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。

```javascript
({ foo: 123 }) // 正确
({ console.log(123) }) // 报错
```

这种差异在 eval 语句（作用是对字符串求值）中反映得最明显。

```javascript
eval("{foo: 123}"); // 123
eval("({foo: 123})"); // {foo: 123}
```

上面代码中，如果没有圆括号，eval 将其理解为一个代码块；加上圆括号以后，就理解成一个对象。

---

## 闭包特性

这就是 javascript 语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。

既然 f2 可以读取 f1 的局部变量，那么只要把 f2 作为返回值，我们不就可以在 f1 外部读取它的内部变量了吗！

```javascript
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

var result = f1();
result(); // 999
```

上面代码中，函数 f1 的返回值就是函数 f2，由于 f2 可以读取 f1 的内部变量，所以就可以在外部获得 f1 的内部变量了。

闭包就是函数 f2，_即能够读取其他函数内部变量的函数_。由于在 javascript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。闭包最大的特点，就是它可以“记住”诞生的环境，比如 f2 记住了它诞生的环境 f1，所以从 f2 可以得到 f1 的内部变量。_在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。_

闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。

```javascript
function createincrementor(start) {
  return function() {
    return start++;
  };
}

var inc = createincrementor(5);

inc(); // 5
inc(); // 6
inc(); // 7
```

上面代码中，start 是函数 createincrementor 的内部变量。通过闭包，start 的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。从中可以看到，闭包 inc 使得函数 createincrementor 的内部环境，一直存在。所以，闭包可以看作是函数内部作用域的一个接口。

_为什么会这样呢？原因就在于 inc 始终在内存中，而 inc 的存在依赖于 createincrementor，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收。_

闭包的另一个用处，是封装对象的私有属性和私有方法。

```javascript
function person(name) {
  var _age;
  function setage(n) {
    _age = n;
  }
  function getage() {
    return _age;
  }

  return {
    name: name,
    getage: getage,
    setage: setage
  };
}

var p1 = person("张三");
p1.setage(25);
p1.getage(); // 25
```

上面代码中，函数 person 的内部变量\_age，通过闭包 getage 和 setage，变成了返回对象 p1 的私有变量。

_注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。_

---

立即调用的函数表达式（iife）

在 javascript 中，圆括号()是一种运算符，跟在函数名之后，表示调用该函数。比如，print()就表示调用 print 函数。

有时，我们需要在定义函数之后，立即调用该函数。这时，你不能在函数的定义之后加上圆括号，这会产生语法错误。

```javascript
function(){}();
// syntaxerror: unexpected token (
产生这个错误的原因是，function这个关键字即可以当作语句，也可以当作表达式。
// 语句
function f() {}
// 表达式
var f = function f() {}
```

为了避免解析上的歧义，javascript 引擎规定，如果 function 关键字出现在行首，一律解释成语句。因此，javascript 引擎看到行首是 function 关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾，所以就报错了。

解决方法就是不要让 function 出现在行首，让引擎将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。

```javascript
(function() {
  /* code */
})();
// 或者
(function() {
  /* code */
})();
```

上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义语句，所以就避免了错误。这就叫做“立即调用的函数表达式”（immediately-invoked function expression），简称 iife。

注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 iife，可能就会报错。

```javascript
// 报错
(function() {
  /* code */
})()(
  (function() {
    /* code */
  })()
);
```

上面代码的两行之间没有分号，javascript 会将它们连在一起解释，将第二行解释为第一行的参数。

推而广之，任何让解释器以表达式来处理函数定义的方法，都能产生同样的效果，比如下面三种写法。

```javascript
// 报错

var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();
甚至像下面这样写，也是可以的。

!function () { /* code */ }();
~function () { /* code */ }();
-function () { /* code */ }();
+function () { /* code */ }();
```

通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 iife 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

```javascript
// 写法一
var tmp = newdata;
processdata(tmp);
storedata(tmp);

// 写法二
(function() {
  var tmp = newdata;
  processdata(tmp);
  storedata(tmp);
})();
```

上面代码中，写法二比写法一更好，因为完全避免了污染全局变量。
