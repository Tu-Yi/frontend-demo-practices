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

























