function genTriangle(dir) {
    var testDiv = document.createElement('div')
    testDiv.style.width = '0'
    testDiv.style.height = '0'
    testDiv.style.border = '50px solid transparent'
    if (dir === 'top') {
        testDiv.style.borderBottomColor = 'yellowgreen'
    } else if (dir === 'bottom') {
        testDiv.style.borderTopColor = '#e0e0e0'
    } else if (dir === 'left') {
        testDiv.style.borderRightColor = 'yellowgreen'
    } else if (dir === 'right') {
        testDiv.style.borderLeftColor = '#fac'
    } else {
        testDiv.style.border = '50px solid black'
    }

    document.body.appendChild(testDiv)
}

genTriangle('top')