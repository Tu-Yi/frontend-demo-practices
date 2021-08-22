# day3

## 复杂选择器

### 父子选择器，派生选择器

**注意：父子选择器中，每一个层级，都不一样要是标签选择器，写 class 选择器也行，重要的是表达出来父子关**

**系。而且这种父子关系有可能是间接地，也有可能是直接的**

```html
<div id="wrapper">
    <strong class="stro">
    	<em>123</em>
    </strong>
</div>
```

```css
/* div strong em {
    background-color: red;
} */


/* strong em {
    background-color: blue;
} */

#wrapper .stro em {
    background-color: greenyellow;
}
```

### 直接子元素选择器

`div > em`

选择直接的子元素，不能选择到间接

### 浏览器解析选择器

`section div ul li a span em {`background-color"red `}`

浏览器遍历的时候是从右向左找的(先看 em,再看 a,再看 li,再看 ul,再看 div)，更快更有效率

### 并列选择器

同一个标签的 标签选择器，id，类可以写在一起来唯一标志标签，标签选择器必须放在前面

```html
<div>1</div>
<div id="aa" class="demo">2</div>
<p class="demo">3</p>

div#aa.demo {
    background-color: yellow;
}
```

### 选择器权重

```html
<div class="classDiv" id="idDiv">
	<p class="classP" id="idP">111</p>
</div>

```

```css
/*100  1    101*/
#idDiv p {
    background-color: red;
}

/* 10     1 100     111*/
.classDiv p#idP {
    background-color: blue;
}
```

### 分组选择器，可以简化代码（常用功能）

`em,strong,span {background-color:red;}`

### 伪类选择器

格式 任意选择器:怎么动 后面有很多种写法 

任意选择器:hover 是一种比较常见的写法

```css
<a href = “www.baidu.com”> www.baidu.com</a>
a:hover{ //a:hover 是当你鼠标移入到控制领域内，发生什么变化
 background-color:orange;
} //也可以写成[href]:hover{}
```

## CSS代码块

#### 字体

![](https://niliv-technology-1252830662.cos.ap-chengdu.myqcloud.com/font1.png)

![](https://niliv-technology-1252830662.cos.ap-chengdu.myqcloud.com/font2.png)

