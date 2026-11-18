// 页面加载完才执行代码
document.addEventListener("DOMContentLoaded", function() {
  var btn = document.getElementById("checkinBtn");
  var msg = document.getElementById("checkinMsg");
  
  if (btn && msg) {
    var today = new Date().toLocaleDateString();
    var lastCheckin = localStorage.getItem("checkinDate");
    
    // 如果今天已经打卡了，就更新按钮状态
    if (lastCheckin === today) {
      msg.textContent = "今天已经打卡啦，继续保持！";
      msg.style.color = "green";
      btn.disabled = true;
      btn.style.backgroundColor = "#ccc";
    }

    // 点击按钮打卡
    btn.addEventListener("click", function() {
      var today = new Date().toLocaleDateString();
      if (lastCheckin !== today) {
        localStorage.setItem("checkinDate", today);
        msg.textContent = "打卡成功！日期：" + today;
        msg.style.color = "green";
        btn.disabled = true;
        btn.style.backgroundColor = "#ccc";
      }
    });
  }
});