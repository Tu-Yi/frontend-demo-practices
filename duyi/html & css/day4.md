# day4

## 字体

#### 字体

![](https://niliv-technology-1252830662.cos.ap-chengdu.myqcloud.com/font1.png)

![](https://niliv-technology-1252830662.cos.ap-chengdu.myqcloud.com/font2.png)

## 元素排列

### 行级元素

- 也叫内联元素 inline，`span，strong，em，a，del`
-  内容决定元素所占位置
- 不可以通过 CSS 改变宽高
- 行级元素自带 CSS 属性，可更改自带属性
- span 自带隐藏属性 display:inline; 可以通过改成 block 变成块级元素

### 块级元素

- `div，p，ul，li，ol，form，address`
- 独占一行
- 可以通过 CSS 改变宽高

### 行级块元素 inline-block

- 内容决定大小
- 可以改变宽高
- 可以通过 display 更改元素属性,`display:block`

#### img

<img src = “"> //一般只设置宽或高，另外一个就等比例缩放了

图片排列，中间有空隙，因为凡是自带 inline 特效的元素，都有文字特性，有文字特性就会被分割

![](https://niliv-technology-1252830662.cos.ap-chengdu.myqcloud.com/Snipaste_2021-08-23_20-07-05.png)

解决图片排列缝隙，父容器字体设为0，和解决inline-block元素有缝隙一样：

```html
<div class="wrapper">
<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/087c52d253d9301dff7743d6bf2d0330.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/087c52d253d9301dff7743d6bf2d0330.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
<img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/087c52d253d9301dff7743d6bf2d0330.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
</div>
```

```css
.wrapper {
    font-size: 0;
}

img {
    width: 100px;
    border: 1px solid red;
}
```

**编程思想**

先抽象功能，写CSS，封装出来，需要用的html再直接引入，组件化思想

**初始化元素**

```css
/* 清除ul默认样式 */
ul{
 list-style:none; //去掉圆点
 padding:0;
 margin:0;
}

a{
 text-decoration:none;
 color:#424242;
}

/* 通配符选择器能初始化所有的标签 */
*{
 padding:0;
 margin:0;
 text-decoration:none;
 list-style:none;
}
```

### 盒子模型

![](https://www.runoob.com/images/box-model.gif)

padding:上 右 下 左；（顺时针） 

padding:上下 左右；（两个值）

padding:上 左右 下；（三个值，中间代表左右），一个值的时候设置四个方向

元素实际宽度（盒子的宽度）=左边界+左边框+左填充+内容宽度+右填充+右边框+右边界。

元素实际宽度（盒子的高度）=上边界+上边框+上填充+内容高度+下填充+下边框+下边界。



## 定位

### 绝对定位

`position：absolute`

- 脱离文档流，不影响其他元素
- 相对于有定位的父级进行定位，如果没有，则相对于文档进行定位

![](https://niliv-technology-1252830662.cos.ap-chengdu.myqcloud.com/Snipaste_2021-08-23_20-43-21.png)

```html
<div class="demo"></div>
<div class="box"></div>
```

```css
body {
    margin: 0;
    padding: 0;
}

.demo {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: red;
    opacity: 0.5;
}

.box {
    width: 150px;
    height: 150px;
    background-color: green;
}
```

### 相对定位

`position:relative`

- 脱硫文档流，但会保留原来的位置
- 相对于原来的位置进行定位

**absolute 和 relative **

relative 作为参照物（不用 relative 进行定位），用 absolute 进行定位，给一个元素只设置1一个 relative，不设

置 left，right，top，bottom，看起来是对这个元素没什么影响的，但是它保留了原来的位置，就对后续元素没

有什么影响absolute 可以任意的调整自己的参照物，更加灵活，所以用于定位想让谁成为基地，就给谁 relative 

定位，并且不设置方向

### 固定定位

`position:fixed`

可以用作小广告，不管滚动条怎么动，它都在一个固定的位置上面

需要搭配 right，left，top，bottom 使用

**居中**

```css
.demo {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: red;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
}
```



