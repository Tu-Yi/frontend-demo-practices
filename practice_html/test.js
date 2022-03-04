/**添加导航菜单事件 */
let Tags = document.getElementsByClassName('menuTrigger')
for (let i = 0; i < Tags.length; i++) {
  Tags[i].onmouseenter = function (e) {
    e.currentTarget.classList.add('active')
  }
  Tags[i].onmouseleave = function (e) {
    e.currentTarget.classList.remove('active')
  }
}
