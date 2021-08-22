# day2

## 表单延续

### 单选框/复选框

```html
<!-- 单选框 -->
<input type = “radio” name = “sex” value = “男”>
<input type = “radio” name = “sex” value = “女”>
<!-- 复选框  默认选中 checked -->
<input type = “checkbox” name = “sex” checked value = “男”>
<input type = “checkbox” name = “sex” value = “女”>
```

***做一个产品需要 1 解决刚需，解决社交 2 用户体验感好（减少用户操作）3 用户粘性***

### 下拉列表

```html
<select name="index">
    <option value="1">上证指数</option>
    <option value="2">医疗指数</option>
    <option value="3">白酒指数</option>
    <option value="4">无效上班</option>
</select>
```



## 浏览器

主流浏览器和内核，主流浏览器是有一定市场份额，并且有自己独立研发的内核

浏览器分 shell+内核

| 主流浏览器（必须有独立内核）市场份额大于 3% | 内核         |
| ------------------------------------------- | ------------ |
| IE                                          | trident      |
| Friefox                                     | Gecko        |
| Google chrome                               | Webkit/blink |
| Safari                                      | Webkit       |
| Opera                                       | presto       |

## 注释

html 的注释是 <!--块注释 --> //行注释

css 注释方式仅有 /* 被注释的内容 */

注释可以用来调节 bug，注释一行，调试一行



## CSS

> 结构 html，样式 css，行为 js 相分离，css 相当于装修材料，cascading style sheet(层叠样式表)

### 引入方式

- 行间样式  `<div style = “”>`

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

**css和html是同时异步下载的**

### 选择器

#### id选择器

一个元素只能有一个 id 值，一个 id 只对应一个元素

```html
<div id = “only”>123</div>
#only {
 background-color: red;
}
```

#### class选择器

.class 就可以找到 class 选择器了

一个 class 可以对应多个元素

```html
<div class = “demo”> 123</div>
<div class = “demo”> 234</div>
.demo{
 background-color: green;
}
<!-- 在上面这种情况，123 和 234 都变成了绿色，如果想让第一个多一个值，多写一个 class 名 -->
<div class = “demo demo1”> 123</div>
.demo1{
 background-color: red;
}
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
span {
	color:red;
}
```

#### 通配符选择器

语法格式 *{}

*是任意的意思，此处是 all，所有的标签（包括 `<html>` 和 `<body>` ）

### CSS权重

![](https://niliv-technology-1252830662.cos.ap-chengdu.myqcloud.com/Snipaste_2021-08-21_20-08-25.png)