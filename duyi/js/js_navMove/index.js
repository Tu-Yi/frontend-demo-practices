var speed = 70
var myUl = document.getElementById('nav')
var lis = document.getElementsByTagName('li')
var temps = [1, 2, 3, 4, 5]
for (var i = 0; i < lis.length; i++) {;
    (function(j) {
        lis[j].onclick = function(e) {
            console.log(e)
            var dis = e.target.offsetLeft
            console.log(e.target.offsetLeft)
            if (dis == 0) {
                myUl.style.left = speed * 2 + 'px'
            } else if (dis == 70) {
                myUl.style.left = speed + 'px'
            } else if (dis == 210) {
                myUl.style.left = '-' + speed + 'px'
            } else if (dis == 280) {
                myUl.style.left = '-' + speed * 2 + 'px'
            }
        }
    })(i)
}