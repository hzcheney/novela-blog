---
title: 一文理解Javascript的Setter和Getter[译]
author: Walter Mitty
date: 2018-03-26
hero: ./images/hero.jpg
excerpt: With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of this incredible tool.
---

---

原文链接： https://marcusnoble.co.uk/2018-01-26-getters-and-setters-in-javascript/  
原文作者：Marcus Noble

---

## 是什么?

我认为最简单的方式是将它们看作同普通属性一样可以创建动态参数值，并以此来调用它们。最好的解释方式必然需要一个例子。

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const ruth = new Person("Ruth", "John");
console.log(ruth.fullName); // "Ruth John"
```

上述例子中我们我们创建了一个 Person 类并且当我们实例化时会接收姓和名这两个参数，同时我们定义了一个 getter 当我们调用时可以动态返回姓名。注意这里我们并没有把`fullName` 定义做函数，它仅仅就像其他那些与对象进行交互的属性一样。

由于我们只为`fullName`定义了一个 getter，因此除此以外我们并不能做其他任何操作。

```js
console.log(ruth.fullName); // "Ruth John"
ruth.fullName = "Someone Else";
console.log(ruth.fullName); // 还是 "Ruth John"
```

Setters 与 getters 差不多是同样的形式，都是接收单一参数然后对其进行处理。

```js
set fullName(val) {
  const names = val.split(' ');
  this.firstName = names[0];
  this.lastName = names[1];
}

...

ruth.fullName = "Someone Else";
console.log(ruth.firstName); // "Someone"
console.log(ruth.lastName); // "Else"
```

## 为什么？

到这里你可能会疑惑，“为什么不使用一个函数来定义呢”？

这里有几个我认为有用的原因。首先，它们为对象的使用者提供了一种与数据进行交互的单一方式，不需要知道静态值和计算值之间的区别。第二个原因是拥有能够将 getter 设置为可枚举的能力（有关此内容，请参见下文），这意味着在执行`JSON.stringify`之类的操作时将包含该 getter，这样您就可以拥有一个计算值的字符串表示形式，然后可以将其持久化或传递到其他地方。

> 注意：使用`get`和`set`关键字只是语法糖，它提供了一些默认属性。参见下文，了解如何更好地控制所定义的属性。

对于 setter 来说，一个非常有用的用例是，当您有一个带有良好使用接口的现有对象时，假设某对象占用了一定的宽度，并在以后决定对该字段进行某些验证。无需引入重大更改，您可以使用 setter 并在那里进行验证，而不必让所有客户端更新它们与对象交互的方式。

```js
class Shape {
  constructor() {
    this.width = 0;
  }
}

const box = new Shape();
box.width = 100; // OK
box.width = "Cake"; // Also OK

// 现在我们来加入一些验证步骤

class Shape {
  constructor() {
    this.width = 0;
  }

  set width(val) {
    if (typeof val !== "number") {
      throw new Error("Must be a number");
    }
    this._width = val;
  }
}

const box = new Shape();
box.width = 100; // OK
box.width = "Cake"; // Throws
```

> 注意：我用`this._width`用来表示“私有”属性。实际上，JavaScript 不具备此功能，而仅仅是一种约定。

## 做的更多

使用`Object.defineProperty`而不是`get`or `set`关键字时，可以得到更多的控制。这使您可以指定诸如属性是否可枚举之类的功能（如上所述对`JSON.stringify`很有用）。

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, "fullName", {
      enumerable: true,
      get: function() {
        return this.firstName + " " + this.lastName;
      }
    });
  }
}

const ruth = new Person("Ruth", "John");
console.log(JSON.stringify(ruth)); // "{\"firstName\":\"Ruth\",\"lastName\":\"John\",\"fullName\":\"Ruth John\"}"
```

请注意，`fullName`由于已将其标记为`enumerable`（可枚举的），因此现在已被字符串化。

> 这里要注意的一件事是，如果您的对象具有可枚举的 getter 但没有 setter（如这里所述），并且尝试这样`Object.assign(new Person, JSON.parse(stringifiedRuthObject))`会得到错误：
>
> TypeError: Cannot set property fullName of #\<Person\> which has only a getter

`Object.defineProperty`除了 getter 和 setter 之外，还可以做更多的事情。它还具有创建只读属性的能力。

```js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, "isAwesome", {
      value: true // 注意，我们没有指定默认为false的`writable`。
    });
  }
}

const ruth = new Person("Ruth", "John");
console.log(ruth.isAwesome); // true
ruth.isAwesome = false;
console.log(ruth.isAwesome); // 还是 true!
```

## 兼容性问题

在整个本文中，我仅使用类来演示 getter 和 setter 的用法，但这不是必需的，您也可以将`Object.defineProperty`在普通对象上使用，并且一直支持到**IE9**。

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  Object.defineProperty(this, "fullName", {
    get: function() {
      return this.firstName + " " + this.lastName;
    }
  });
}

var ruth = new Person("Ruth", "John");
console.log(ruth.fullName); // "Ruth John"
```

## 有关说明

也可以通过其他方式进行类似 setter 和 getter 的操作。现在已经被废弃的`Object.observe`也可以对实例化的对象做同样的操作，最近引入的`Proxy`也允许你包装实例化的对象并拦截对其进行的操作。但是同样不推荐您首先使用。

查看一下 MDN 文档有关[Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 的设置会很有用。
