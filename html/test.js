//录播作业：求字符串字节长度
var metaStr = 'hello world!'

console.log('str的字节长度：' + getCodeLen(metaStr)) //str的字节长度：12

function getCodeLen(str) {
    var sum = 0
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i)
        if (code <= 255) {
            sum += 1
        } else {
            sum += 2
        }
    }
    return sum
}