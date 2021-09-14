var a = 'opkhijpokhiajpokijhpokipohjkpojhkpohjkphbjpokopkijhkijhpo'

function findSingleChar(str) {
    var len = str.length
    for (var i = 0; i < len; i++) {
        var firStr = str.slice(i + 1)
        var secStr = str.slice(0, i)
        if (firStr.indexOf(str[i]) == -1 && secStr.indexOf(str[i]) == -1) {
            return str[i]
        } else {
            continue
        }
    }
}

console.log(findSingleChar(a)) //a