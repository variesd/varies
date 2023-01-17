# The Beauty of Bézier Curves


## The Ever so Lovely Bézier Curve
### What is a Bezier curve?

A Bézier curve (/ˈbɛz.i.eɪ/ BEH-zee-ay) is a parametric curve used in computer graphics and related fields.

A set of discrete "control points" defines a smooth, continuous curve by means of a formula.

Usually, the curve is intended to approximate a real-world shape that otherwise has no mathematical representation or whose representation is unknown or too complicated.

The Bézier curve is named after French engineer Pierre Bézier (1910–1999), who used it in the 1960s for designing curves for the bodywork of Renault cars. Other uses include the design of computer fonts and animation.

Bézier curves can be combined to form a Bézier spline, or generalized to higher dimensions to form Bézier surfaces. The Bézier triangle is a special case of the latter.

一条贝塞尔曲线是由一组 Points 从 P0 ～ PN 所控制的，这边 N 就是他的顺序（比如 N=1 的时候是线性的，2 的时候是二次，等等）。第一个控制点和最后一个控制点是曲线的终点；然而中间的一些控制点（如果有），通常不在曲线上。这些点的组合可以理解为仿射组合（affine combination，也就是不仅有点，还有点指向的方向），他们的系数之和等于一。

- 贝塞尔曲线是由一堆点的集合绘制而成。
- 这一堆点是在定义的 P0 ～ PN 的控制之下得出的。
- P0 ～ PN 这些定义的点，第一个点和最后一个点是曲线的开头和结尾。


### 线性Bézier curves
线性Bézier curves是由两个点P0和P1控制形成的，

假设我们有两个点 P0 and P1 分段连接，想象第三个点在这两点之间 P 第三个点 P 定义一个 t 值 这个 t 的 value 就是
介于 0 - 1 之间的值 作为百分比

当 t 等于 1 时 说明 P 移动到了 P1
当 t 等于 0 时 说明 P 移动到了 P0
在中间 t 的 值 是 0 - 1 之间的值
这个函数 也叫做线性插值 `lerp`

在数学中 你可以把它定义为
```ts
P = lerp(P0, P1, t)
P = (1-t)P0 + tP1
```


### 二次Bézier curves

如果我们添加一个新的点

把 两条线段的 P 点连接起来

我们在继续从这条线段增加一个 P 点
t 的value 也可以发生变化
这样就形成了 二次 贝塞尔


继续添加一个点 形成三条线段 三条线段又有各自的 t 点

连接他们 在连接上的两条线段 增加 两个点

### What is a lerp

学习 lerps 函数 https://zhuanlan.zhihu.com/p/114898567

https://juejin.cn/post/6844903774117429261#comment

![911fcc8f17a81bd9ae5d9874ee680c5.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0955c60a081f4d82a30944cb2ccff016~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ec12bf2b8524180895e4c2d065fd6f3~tplv-k3u1fbpfcp-watermark.image?)
