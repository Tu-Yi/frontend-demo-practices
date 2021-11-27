# day2

## CSS

> 结构 html，样式 css，行为 js 相分离，css 相当于装修材料，cascading style sheet(层叠样式表)

### 引入方式

- 行间样式 `<div style = “”>`

- 页面级 css

```html
<head>
    <style type = “text/css”>
    </style>
</head>
```

- 外部 css 文件

```html
<head>
  <link rel = “stylesheet” type = “text/css” href = “”>
</head>
```

**css 和 html 是同时异步下载的**

### 选择器

#### id 选择器

一个元素只能有一个 id 值，一个 id 只对应一个元素

```html
<div id="“only”">123</div>
#only { background-color: red; }
```

#### class 选择器

.class 就可以找到 class 选择器了

一个 class 可以对应多个元素

```html
<div class="“demo”">123</div>
<div class="“demo”">234</div>
.demo{ background-color: green; }
<!-- 在上面这种情况，123 和 234 都变成了绿色，如果想让第一个多一个值，多写一个 class 名 -->
<div class="“demo" demo1”>123</div>
.demo1{ background-color: red; }
```

#### 标签选择器

标签名{}

如果想选择就写 `<div>` div{}，如果想选择`<span>`就写 span{}，不管被套多少层，都

会被选择出来，而且是选择全部

```html
<span>123</span>
<div>
  <span>234</span>
</div>
span { color:red; }
```

#### 通配符选择器

语法格式 \*{}

\*是任意的意思，此处是 all，所有的标签（包括 `<html>` 和 `<body>` ）

### CSS 权重

![](https://niliv-technology-1252830662.cos.ap-chengdu.myqcloud.com/Snipaste_2021-08-21_20-08-25.png)
