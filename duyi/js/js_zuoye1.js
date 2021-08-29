/**
 *2的n次幂
 *
 * @param {*} n
 */
{
    function powerOf2(n) {
        var num = 1
        for (var i = 0; i < n; i++) {
            num = num * 2
        }
        console.log('2的' + n + '次幂：' + num)
    }
    powerOf2(3)
}

/**
 * 计算n的阶乘，n可输入
 *
 * @param {*} n
 * @return {*}
 */
{
    function testFactorial(n) {
        if (n < 0) {
            return -1
        } else if (n == 0 || n == 1) {
            return 1
        } else {
            for (var i = n - 1; i >= 1; i--) {
                n = n * i
            }
        }
        return n
    }
    console.log('10的阶乘：' + testFactorial(10))
}

/**
 *斐波那契额数列，输出第n项
 *
 * @param {*} n
 * @return {*}
 */
{
    function testFb(n) {
        var res1 = 1
        var res2 = 1
        var sum = res2
        for (var i = 2; i < n; i++) {
            sum = res1 + res2
            res1 = res2
            res2 = sum
        }
        return sum
    }
    console.log('斐波那契额数列第5项：' + testFb(10))
}

/**
 *反转数字位
 *
 * @param {*} num
 * @return {*}
 */
{
    function reverseNumber(num) {
        var returnStr = ''
        var numStr = num + ''
        for (var i = numStr.length - 1; i >= 0; i--) {
            returnStr += numStr[i]
        }
        return returnStr
    }
    console.log('反转数字456：' + reverseNumber(456))
}

/**
 *输入3个数字，打印出最大的
 *
 * @param {*} n1
 * @param {*} n2
 * @param {*} n3
 * @return {*}
 */
{
    function maxNumber(n1, n2, n3) {
        var arr = [n1, n2, n3]
        var maxNum = arr[0]
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                maxNum = arr[i]
            }
        }
        return maxNum
    }
    console.log('输入3个数字25, 23, 12，打印出最大的：' + maxNumber(25, 23, 12))
}

/**
 *打印100以内的质数
 *
 * @return {*}
 */
{
    function primesOf100() {
        var primes = []
        for (var i = 1; i <= 100; i++) {
            var en = true
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    en = false
                }
            }
            if (en) {
                primes.push(i)
            }
        }
        return primes
    }
    console.log('打印100以内的质数：' + primesOf100().join(' '))
}