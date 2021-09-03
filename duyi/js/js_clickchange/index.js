window.onload = function() {
    var divContants = document.querySelector('.contants')
    var descSpan = document.querySelector('.desc span')
    var desc = document.querySelector('.desc')
    var buttons = document.getElementsByTagName('button')
    console.log(buttons)
    for (var i = 0; i < buttons.length; i++) {;
        (function(j) {
            buttons[j].onclick = function(e) {
                var bgColor = getComputedStyle(e.target, null).getPropertyValue(
                    'background-color'
                )
                descSpan.style.color = bgColor
                divContants.style.backgroundColor = bgColor
                desc.style.backgroundColor = '#E9F4FE'
            }
        })(i)
    }
}