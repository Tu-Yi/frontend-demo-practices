var mainContent = document.querySelector(".main-content");

// 生成一个div.main-content-item
function createItem(d) {
  console.log(d);
  var div = document.createElement("div");
  div.className = "main-content-item";
  div.innerHTML = `<a href="https://www.douyin.com/video/${d.videoId}" target="_blank" class="item-cover">
    <!-- 所有子元素变绝对定位 -->
    <img src="${d.cover}" alt="" />
    <div class="favor">
      <i class="iconfont icon-zan"></i>
      <span>${d.favor}</span>
    </div>
    <div class="time">${d.time}</div>
    <div class="progress">
      <span></span>
    </div>
  </a>
  <!-- 标题 -->
  <h2 class="item-title">
    ${d.title}
  </h2>
  <!-- 作者 -->
  <div class="item-author">
    <a href="" class="item-name">
      <img src="${d.author.avatar}" alt="" />
      <span>${d.author.name}</span>
    </a>
    <span class="date">${d.date}</span>
  </div>`;

  //   加入到容器中
  mainContent.appendChild(div);

  //   先创建视频对象
  var span = div.querySelector(".progress span");
  var vd = new VideoController(d.video, function () {
    // 视频播放进度变化运行
    span.style.width = vd.progess + "%";
  });
  // 找到a元素
  var itemCover = div.querySelector(".item-cover");
  var isAddVideo = false;
  //   鼠标移入播放视频
  itemCover.addEventListener("mouseenter", async function () {
    var dom = await vd.play();
    if (!isAddVideo) {
      itemCover.appendChild(dom);
      isAddVideo = true;
    }
    div.classList.add("playing");
  });

  //   鼠标移出停止播放
  itemCover.addEventListener("mouseleave", async function () {
    await vd.pause();
    div.classList.remove("playing");
  });
}

// 初始化函数
async function init() {
  // 1. 网络通信，获取真实数据（这里使用模拟数据）
  var data = await fetch("./js/data.json").then((resp) => resp.json());
  // 2. 循环对象数组，每个对象生成一个列表项
  for (const d of data) {
    createItem(d);
  }
}

init();
