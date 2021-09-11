var odiv = document.getElementById('move')
move(odiv, 'left', 3, 0, 500, function() {
    move(odiv, 'left', 3, 500, 0)
})

function move(dom, prop, speed, start, end, fb) {
    var timer = null
    var distance = start
    if (start - end > 0) {
        speed *= -1
    }
    timer = setInterval(function() {
        distance += speed
        dom.style[prop] = distance + 'px'
        if (speed > 0 && distance >= end) {
            dom.style[prop] = end + 'px'
            clearInterval(timer)
            fb && fb()
        }
        if (speed < 0 && distance <= end) {
            dom.style[prop] = end + 'px'
            clearInterval(timer)
            fb && fb()
        }
    }, 10)
}