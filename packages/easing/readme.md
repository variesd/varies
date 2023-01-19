# The Beauty of Bézier Curves



![911fcc8f17a81bd9ae5d9874ee680c5.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0955c60a081f4d82a30944cb2ccff016~tplv-k3u1fbpfcp-watermark.image?)

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


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ec12bf2b8524180895e4c2d065fd6f3~tplv-k3u1fbpfcp-watermark.image?)

<img width="777" alt="image" src="https://user-images.githubusercontent.com/66500121/213360699-aed61780-38f6-4a8a-9129-e2c0eed5a747.png">
<img width="765" alt="image" src="https://user-images.githubusercontent.com/66500121/213360720-9e659b02-60f7-43f2-8979-86570a68a2ee.png">
<img width="707" alt="image" src="https://user-images.githubusercontent.com/66500121/213360732-5720ddde-0d9c-4cb9-805f-441dcacbd0db.png">
<img width="742" alt="image" src="https://user-images.githubusercontent.com/66500121/213360742-b40e9705-d570-4323-8ff6-9d497382aeff.png">
<img width="808" alt="image" src="https://user-images.githubusercontent.com/66500121/213360749-1a835584-90ec-4abf-93a0-eb13060cb913.png">
<img width="711" alt="image" src="https://user-images.githubusercontent.com/66500121/213360759-b1d733d0-d228-4772-9eac-0134373381cd.png">
![image](https://user-images.githubusercontent.com/66500121/213360766-486a8c3b-1201-4b69-ab0c-badba6874412.png)
<img width="707" alt="image" src="https://user-images.githubusercontent.com/66500121/213360768-30fe7f11-938c-4fc3-a552-45546e596327.png">
<img width="707" alt="image" src="https://user-images.githubusercontent.com/66500121/213360777-cb34fd21-ed81-4b18-bf1c-1d9b1c9862fd.png">
![image](https://user-images.githubusercontent.com/66500121/213360787-6e9e917c-5914-4e8f-a3c0-e26ad05d97ca.png)
![image](https://user-images.githubusercontent.com/66500121/213360798-7a37f1f0-1547-4781-b153-2ed4b91fad3a.png)
![image](https://user-images.githubusercontent.com/66500121/213360805-66befeae-3945-49df-97ee-db3a354d57d4.png)
<img width="1334" alt="image" src="https://user-images.githubusercontent.com/66500121/213360817-d0d4224e-3b52-4a2f-8713-c9daf54e82be.png">
<img width="1396" alt="image" src="https://user-images.githubusercontent.com/66500121/213360823-f825bba3-6172-4c35-8ea9-ebb75f9a422d.png">
<img width="1302" alt="image" src="https://user-images.githubusercontent.com/66500121/213360830-18896cd8-b6bf-4d39-afc6-e8dc2ccdad05.png">















![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ec12bf2b8524180895e4c2d065fd6f3~tplv-k3u1fbpfcp-watermark.image?)
