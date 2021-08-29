countDown()

/**
 * 1，每个偶数整点开始秒杀专场
 * 2，当前秒杀专场时间为2个小时
 *
 */
function countDown() {
    var myDate = new Date()
    var year = myDate.getFullYear()
    var month = myDate.getMonth() + 1
    var day = myDate.getDate()
    var hour = myDate.getHours()

    var flashHour = isEven(hour) ? hour : hour - 1
    document.getElementById('flash-hour').innerText = flashHour + ':00'

    var limitTime =
        year + '-' + month + '-' + day + ' ' + (flashHour + 2) + ':00:00'
    var endDate = new Date(limitTime)
    var differTime = endDate.getTime() - new Date().getTime()
    var countDownHour = document.getElementById('countDown-hour')
    var countDownMin = document.getElementById('countDown-min')
    var countDownSec = document.getElementById('countDown-sec')

    var h, m, s
    h = Math.floor(differTime / 1000 / 60 / 60)
    m = Math.floor((differTime / 1000 / 60) % 60)
    s = Math.floor((differTime / 1000) % 60)
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
    countDownHour.innerHTML = h
    countDownMin.innerHTML = m
    countDownSec.innerHTML = s

    setTimeout(function() {
        countDown()
    }, 1000)
}

/**
 * 判断是否为偶数
 *
 * @param {*} n
 * @return {*}
 */
function isEven(n) {
    return (n & 1) === 0
}