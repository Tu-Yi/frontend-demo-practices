/*
 * @Author: your name
 * @Date: 2021-08-27 11:11:41
 * @LastEditTime: 2021-11-22 19:59:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frontend-demo-practices\html_priactice\test.js
 */

var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

fs.mkdirSync('./' + dirName) // mkdir $1
process.chdir('./' + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

fs.writeFileSync('./index.html', '')
fs.writeFileSync('css/style.css', '')
fs.writeFileSync('./js/main.js', '')

process.exit(0)
