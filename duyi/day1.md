# HTML

>  hyperText markup language   解释：超文本标记语言

## HTML元素

### 根标签

"lang" 告诉搜索引擎爬虫，我们的网站是关于什么内容的，en 代表是英文，zh 是中文，德语是 de

```html
<html lang="en">
```

### 字符集

```html
<meta charset="UTF-8">
```

### 标题

```html
<title>HTML重要元素演示</title>
```

### 文字

p，段落标签，让内容成段展示

h1-h6  分段，放大字体，加粗

em，strong，del，斜体，加粗，中划线

address，地址(p+em)，基本不使用

### 容器

div，span，容器标签，分块明确，捆绑操作

### 独立

br 换行

hr 水平线

### 英文溢出问题

如果是一个单词，溢出是不管的

空格的含义是英文单词分隔符，不代表文本的空格，作为分隔符，打多少个都只显示一个空格；回车也是文字分割符，也是打多少个都只显示一个空格

```html
<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 10px;">sfafasfsadfsadfsadfasdfas</div>
<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 10px;">sf afasfs adfs adfsa dfas df as</div>
<div style="width: 100px;height: 100px;background-color: red;margin-bottom: 10px;">所发生的放松的方式毒腐蚀毒</div>
```

### html编码

空格：`&nbsp;`

小于大于：`&lt;`，`&gt;`

### 列表

#### 有序列表

`<ol> <li>`

如果写成：<ol type = “1"> 就以 ABC 排序， 改成 a，就以 abc 排序

此处的 type 值只有五个：数字，大写英文 A，小写英文 b，罗马数字大写 I，罗马数字小写 i

写成<ol type = “1" reversed = “reversed"> 就是倒序

如果想从第 2 个开始排序，就写<ol type = “1" start = “2">

如果想从第 117 个开始排序，就写<ol type = “i" start = “117">

```html
<ol>
    <li>第一步</li>
    <li>第二步</li>
    <li>第三步</li>
</ol>
```

#### 无序列表

如 type = “disc” 意思是 discircle，实心圆

如 type = “square” 意思是 square，实心方块

如 type = “circle” 意思是 circle，圈(空心圆)

ul 和 li 是一个很好的天生父子结构(柜子与抽屉)，可以做导航栏，适用于一个大的功能由很多子项组成，样式一样，只是内容不同

```html
<ul>
    <li>白酒指数</li>
    <li>医疗指数</li>
    <li>无效上班</li>
</ul>
```

### 图像

`<img>`

src：网络路径，相对路径，绝对路径

alt：图挂了，展示这个信息

title：当鼠标放上去，就会显示这个信息

```html
<img src="https://profile-photo.s3.cn-north-1.amazonaws.com.cn/files/avatar/50577/MTAxMTU0MzYyOW12OWhjNjFq/avatar.png?v=4a3429fcf895f48c72394b93dfacda83" alt="此地无银三百两" title="我是标题">
```

### 超链接

`<a>`

href 是 hyperText reference 超文本引用

target = “_blank”    新标签中打开这个地址

a标签可以包裹图片

1）超链接

`<a href = “https://www.baidu.com”>www.taobao.com</a>`

2）锚点

href=“id”，id位置，锚点记录位置，回到顶部，朋友圈双击回到顶部

3）打电话，发邮件

`<a href="tel:19135625689">给你妹打电话</a>`  `<a href="mailto:123456789@qq.com">给你妹打电话</a>`

4）协议限定符

`<a href="javascript:alert(123)">点我试试</a>`

### 表单

`<form>`

```html
<input type = “text”> //这个是输入框的意思
<input type = “password”> //这个是密码框的意思，默认是暗文
<input type = “submit”> //这个是提交的组件，也就是登录
<input type = “submit” value = “login”> //这样就改变了提交框的值
<input type = “radio”> //是单选框
<input type = “checkbox”> //是复选框
要注意语义化，所以用 p 标签更好，p 标签天生的功能就是换行
```

```html
<input type = “text” name = “username”> 此处 name 是数据名最好填写接近意思的英文单词，方便使用
<input type = “password” name = “password”>，暗文是仅对自己不可见，受网安局监管的公司，一般用 md5，不可逆的加密方式
```

```html
<input type = “radio” name = “sex” value = “男”>
<input type = “radio” name = “sex” value = “女”>
```



























