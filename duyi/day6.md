# day6

## 文字溢出

```css
<p>上发斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬斯蒂芬的所发生的放松的方式的是非得失</p>

/* 单行溢出处理 */
p {
    width: 200px;
    border: 1px solid #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
/* 多行溢出处理 */
p {
    width: 200px;
    border: 1px solid #000;
    word-break: break-all;
    display: -webkit-box;
    /**对象作为伸缩盒子模型展示**/
    -webkit-box-orient: vertical;
    /**设置或检索伸缩盒子对象的子元素的排列方式**/
    -webkit-line-clamp: 2;
    /**显示的行数**/
    overflow: hidden;
    /**隐藏超出的内容**/
}
```

![](E:\github\frontend-demo-practices\duyi\bj_img\1.png)

![](E:\github\frontend-demo-practices\duyi\bj_img\2.png)

## 背景图片

```css
<div class="bakimg-test">

</div>
.bakimg-test {
    width: 300px;
    height: 300px;
    border: 1px solid yellowgreen;
    /* url 图片地址或base64代码 */
    background-image: url(zbb.png);
    /* 图片大小 宽高 可以是百分数 可以是像素等 */
    background-size: 100px 100px;
    /* 背景重复 */
    background-repeat: no-repeat;
    /* 背景图片在容器的位置 可以是方位 可以是像素等 */
    background-position: left bottom;
}
```

![](E:\github\frontend-demo-practices\duyi\bj_img\3.png)



## CSS补充

### 元素嵌套

我们在元素嵌套时，行级元素只能嵌套行级元素，块级元素可以嵌套任何元素。

div 里面可以加任何东西，span 里面只能加行级元素

例外，块级元素 p 标签里面不能嵌套 div

例外二，<a>标签里面不能嵌套<a>标签

### inline 和 inline-block 都是文本类元素

凡是带有 inline 属性的元素，都有文本类特点，所以叫文本类元素

解决图片或inline-block之间有缝隙：父元素字体设置为0

```css
<div>
    <img src="zbb.png" alt="">
    <img src="zbb.png" alt="">
    <img src="zbb.png" alt="">
    <img src="zbb.png" alt="">
</div>
div {
    font-size: 0;
}

img {
    width: 200px;
    height: 200px;
}
```

### 绝对定位和浮动能让行级元素改成display:inline-block

```css
<span>123123</span>
<em>234243</em>
span {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: aquamarine;
}

em {
    float: left;
    margin-left: 300px;
    width: 100px;
    height: 100px;
    background-color: aquamarine;
}
```

![](E:\github\frontend-demo-practices\duyi\bj_img\4.png)

### 文字对齐

文本和文本之间都是默认的底对齐
文本和图片之间也是底对齐。但是把 span 变成 inline-block，一旦 span 里面放了文字，那么外面的文字就和和他里面的文字进行底对齐

vertical-align:10px;文字就会往下调，如果是-10px，就会往上调 middle 是中对齐

```
<span>123123</span> 234234
span {
    display: inline-block;
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    font-size: 50px;
    line-height: 200px;
    vertical-align: 10px;
}
```

### 练习 列表

![](E:\github\frontend-demo-practices\duyi\bj_img\5.png)

```html
<ul>
    <li><a class="link" href="">学而思</a></li>
    <li><a class="link" href="">猿辅导</a></li>
    <li><a class="link" href="">作业帮</a></li>
</ul>
```

```css
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #424242;
}

ul {
    width: 300px;
    margin: 0 auto;
    list-style: none;
}

.link {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    color: rgba(0, 0, 0, 0.5);
    position: relative;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
}

.link::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(baidu.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-right: 5px;
    vertical-align: -3px;
}

.link::after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(arrow.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    top: 18px;
}
```









