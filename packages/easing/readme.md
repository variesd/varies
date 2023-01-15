# The Beauty of Bézier Curves

### What is a Bezier curve?

A Bézier curve (/ˈbɛz.i.eɪ/ BEH-zee-ay)[1] is a parametric curve used in computer graphics and related fields.[2] A set of discrete "control points" defines a smooth, continuous curve by means of a formula. Usually, the curve is intended to approximate a real-world shape that otherwise has no mathematical representation or whose representation is unknown or too complicated. The Bézier curve is named after French engineer Pierre Bézier (1910–1999), who used it in the 1960s for designing curves for the bodywork of Renault cars.[3] Other uses include the design of computer fonts and animation.[3] Bézier curves can be combined to form a Bézier spline, or generalized to higher dimensions to form Bézier surfaces.[3] The Bézier triangle is a special case of the latter.

一条贝塞尔曲线是由一组 Points 从 P0 ～ PN 所控制的，这边 N 就是他的顺序（比如 N=1 的时候是线性的，2 的时候是二次，等等）。第一个控制点和最后一个控制点是曲线的终点；然而中间的一些控制点（如果有），通常不在曲线上。这些点的组合可以理解为仿射组合（affine combination，也就是不仅有点，还有点指向的方向），他们的系数之和等于一。

贝塞尔曲线是由一堆点的集合绘制而成。
这一堆点是在定义的 P0 ～ PN 的控制之下得出的。
P0 ～ PN 这些定义的点，第一个点和最后一个点是曲线的开头和结尾。

lerp 函数 https://zhuanlan.zhihu.com/p/114898567

https://juejin.cn/post/6844903774117429261#comment

![911fcc8f17a81bd9ae5d9874ee680c5.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0955c60a081f4d82a30944cb2ccff016~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ec12bf2b8524180895e4c2d065fd6f3~tplv-k3u1fbpfcp-watermark.image?)
