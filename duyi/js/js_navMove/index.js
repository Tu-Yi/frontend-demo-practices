// 难点在于
// 1， dom函数不熟悉
// 2， 不知道位置和图像的变化该用什么方法和逻辑处理

var wrapper = document.getElementById('nav')

function move(dom, prop, start, end, fn) {
    var speed = 3
    var distance = start
    var tid = null
    if (end < start) {
        speed *= -1
    }
    tid = setInterval(function() {
        distance += speed
        dom[prop] = distance
        if (speed > 0 && distance >= end) {
            dom[prop] = end
            clearInterval(tid)
            fn && fn()
        }
        if (speed < 0 && distance <= end) {
            dom[prop] = end
            clearInterval(tid)
            fn && fn()
        }
    }, 5)
}

wrapper.onclick = function(e) {
    var item = e.target
    var itemRect = item.getBoundingClientRect()
    var wrapperRect = wrapper.getBoundingClientRect()

    var itemWidth = itemRect.width
    var itemLeft = itemRect.left

    var wrapperWidth = wrapperRect.width
    var wrapperLeft = wrapperRect.left

    var distance = itemLeft + itemWidth / 2 - (wrapperLeft + wrapperWidth / 2)

    console.log(distance)

    move(wrapper, 'scrollLeft', wrapper.scrollLeft, wrapper.scrollLeft + distance)
}