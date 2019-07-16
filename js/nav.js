// 导航栏输入框动画
var oSearch = document.getElementById("header-search");

oSearch.onfocus = function() {
  oSearch.style.width = 200 + "px";
};

oSearch.onblur = function() {
  oSearch.style.width = 160 + "px";
};

// 判断导航栏样式是否需要变化
var oBody = document.getElementsByTagName("body")[0];
var oHeader = document.getElementsByTagName("header")[0];
var oSetting = document.getElementsByClassName("home-top-setting")[0];
var dataImg = oBody.getAttribute("data-img");
var dataPosition = oBody.getAttribute("data-position");

if (dataImg == "true") {
  oSearch.classList.add("home-top-input");
  oSetting.src = "./img/setting-white.png";
}

if (dataPosition == "true") {
  oHeader.classList.add("home-top-position");
}
