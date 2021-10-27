# day5

## 布局

### 两栏布局

```css
<div class="right"></div>
<div class="left"></div>
    
    
* {
    margin: 0;
    padding: 0;
}

.left {
    background-color: blue;
    width: 100px;
    height: 100px;
    opacity: 0.5;
    position: absolute;
    top: 0;
}

.right {
    background-color: red;
    margin-left: 100px;
    height: 100px;
}
```

### margin 塌陷

父子嵌套元素垂直方向的 margin，父子元素是结合在一起的，他们两个会取其中最大的值

正常情况应该是父级相对于浏览器进行定位，子级应该相对于父级定位的

但是 margin 塌陷是在父级相对于浏览器进行定位时，子级没有相对于父级定位，就像父级的棚子没有了一样，子级相对于父级，就像塌陷了一样

margin 塌陷解决方案：应该用 bfc，改变父级的渲染规则

#### BFC

block format context，块级格式化上下文，触发 bfc，特定的盒子会遵循另一套规则

1）position:absolute;

2）display:inline-block;

3）float:left/right; //浮动

4）overflow:hidden; //溢出盒子的部分要隐藏展示

这四种方法都能触发 bfc，但是使用的时候都带来了新的麻烦

在具体情况中，针对需求，哪个触发方式没有影响，就用哪个解决塌陷问题

***最新触发BFC方法：display: flow-root;***

![](https://niliv-technology-1252830662.cos.ap-chengdu.myqcloud.com/Snipaste_2021-08-24_12-06-29.png)

```html
<div class="top"></div>
<div class="wrapper">
    <div class="box"></div>
</div>
```

```css
* {
    margin: 0;
    padding: 0;
}

.top {
    background-color: blue;
    width: 100px;
    height: 100px;
}

.wrapper {
    background-color: red;
    width: 100px;
    height: 100px;
    margin-top: 100px;
    /* 触发bfc */
    display: flow-root;
}

.box {
    background-color: green;
    width: 50px;
    height: 50px;
    margin-top: 20px;
}
```

### margin合并

两个兄弟结构的元素，他俩垂直方向的 margin 是合并的，margin 合并依然使用 bfc 解决

实际开发中，在 margin 合并这个 bug 上，我们不用 bfc（不能改变 html 的结构）

假如我们需要两个 div 直接有 300px，那就设置上面的 margin-bottom:300px;来解决距离的问题

```html
    <div class="top"></div>
    <div class="wrapper">
        <div class="box"></div>
    </div>
```

```css
.wrapper {
    display: flow-root;
}

.top {
    background-color: blue;
    width: 100px;
    height: 100px;
    margin-bottom: 100px;
}

.box {
    background-color: red;
    width: 100px;
    height: 100px;
    margin-top: 100px;
}
```

### 浮动

` float:left/right;`

- 浮动元素产生了浮动流

  - 所有产生了浮动流的元素，块级元素看不到他们
  - 产生了bfc的元素和文本类属性(inline)的元素以及文本都能看到浮动元素，带inline的元素能看到
  - 清除浮动

  ```css
  /* 不能用这种方式，改变了hmtl结构了 */
  <p class="clear"></p>
  .clear {
      clear: both;
  }
  
  .clearfix::after {
      content: '';
      display: block;
      clear: both;
  }
  ```

  **注意：凡是设置了 position:absolute； 或 float：left/right；他会把元素转换成inline-block，所以由内容来决定宽高，改成 block 才能独占一行**

  比如：span设置宽高没用，如果改成 position:absolute，就可以设置宽高了

  浮动使用：

  - 最初用来做图片的文字环绕效果

  #### 伪元素

  伪元素天生就存在于任意一个元素（标签 tag element）里面。天生是**行级元素**，可以display变成块级

  为什么叫伪元素？因为他的元素结构是存在的，但是他没写到 HTML 里面，他可以被 css 选中，并正常操作，但是他没有 html 结构，所以叫伪元素。

  他有两个特殊的伪元素 before 和 after

  伪元素可以跟正常元素差不多可以一起来使用，但是他没有正常的元素结构

  一个标签诞生的时候，他就有了伪元素，伪元素存在于逻辑的最前（after）和逻辑的最后（before），只是

  一般看不见，除非我们通过 css 选中，并操作他

  写成 span::before{}就是选择了 span 的 before 伪元素，里面有一个必须要有的值是content:“”。而 content 

  也只能用在伪元素中

  而为了清除 float 的浮动流，就可以用到伪元素，也是最好的选择
  **clear 很特殊，想让他生效，必须是块级元素才可以，而::after 是行级元素**

  

  















