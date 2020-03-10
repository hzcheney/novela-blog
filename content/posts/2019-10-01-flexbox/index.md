---
title: 弹性布局完全指南
author: Walter Mitty
date: 2019-04-30
hero: ./container.svg
excerpt: With the growing community interest in Gatsby, we hope to create more resources that make it easier for anyone to grasp the power of this incredible tool.
---

# 弹性盒子完全指南

## 背景

弹性盒子布局模块 (或者说叫灵活的盒子）[^2017年10月被w3c候选推荐] 的目标是提供一种更有效的方法来实现布局，对齐和为容器之中的元素分配空间，即使当它们的大小是未知或者动态改变的（之所以被称作弹性盒子的原因）。  
弹性布局的主要思想是使容器能够更改其元素的大小和顺序，以最好地填充可用空间（主要是适应所有类型的显示设备和屏幕尺寸）。弹性容器会扩展元素以填充可用的空间，或收缩元素以防止其溢出屏幕。  
最重要的是，与常规布局（基于垂直方向的块元素和基于水平方向的内联布局）相比，弹性盒子布局与方向无关。尽管这些样式的页面显示效果很好，但是它们缺乏更多的灵活性来支撑大型且复杂的应用（尤其是在方向更改，调整大小，拉伸，收缩等方面）。  
**注意**： 弹性盒子布局最适合应用于组件设计以及小规模布局，而网格布局（Grid Layout）则用于较大规模的布局。

## 基础知识和术语

由于弹性盒子是一个完整的模块，而不是单个的属性，因此它涉及到很多概念，包括其整个的属性集合。它们中的一些应该放置在容器之上（父元素，或称为弹性容器），而其他一些则应放置在孩子上（或称为弹性元素）。  
如果常规布局基于块和内联文档流方向，则弹性布局将基于灵活流动的方向。请查看规范中的此图，该图解释了弹性布局背后的主要思想。  
<img src="https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg">  
元素将沿着主对称轴（从**main-start**到**main-end**）或副对称轴（从**cross-start**到**cross-end**）进行布局。

- 主对称轴：弹性容器的主对称轴是弹性元素沿着其布局方向的主对称轴。这里要当心，它不一定是水平的。它取决于**flex-direction**属性（请参见下文）。
- main-start ｜ main-end ：弹性在容器中的排列方向从 main-start 开始到 main-end 结束。
- 主要尺寸 ：弹性元素的宽带或高度（以主要尺寸中的较大者为准）是该元素的主要尺寸。
- 副对称轴 ：垂直于主轴的轴称为横轴。其方向取决于主轴的方向。
- cross-start | cross-end ： 弹性线条被元素所填充并且从弹性容器的 cross-start 端开始并朝 cross-end 端放置到容器中。
- 次要尺寸 ：弹性项目的宽度和高度（以副对称轴尺寸为主）是项目的次要尺寸。
  ![父级元素的属性（弹性容器）](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)
  待更新
  [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)

## 示例
