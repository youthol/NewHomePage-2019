var initInfo = {
  // 获取启动页可用高度
  getHeight: function() {
    var maxH = screen.availHeight;
    var vHeight = maxH - (window.outerHeight - window.innerHeight);
    return vHeight;
  },
  // 获取浏览器信息
  getExploreName: function() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      return "Opera";
    } else if (
      userAgent.indexOf("compatible") > -1 &&
      userAgent.indexOf("MSIE") > -1
    ) {
      return "IE";
    } else if (userAgent.indexOf("Edge") > -1) {
      return "Edge";
    } else if (userAgent.indexOf("Firefox") > -1) {
      return "Firefox";
    } else if (
      userAgent.indexOf("Safari") > -1 &&
      userAgent.indexOf("Chrome") == -1
    ) {
      return "Safari";
    } else if (
      userAgent.indexOf("Chrome") > -1 &&
      userAgent.indexOf("Safari") > -1
    ) {
      return "Chrome";
    } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
      return "IE>=11";
    } else {
      return "Unkonwn";
    }
  }
};

var mySwiper = new Swiper(".swiper-container", {
  autoplay: true, //可选选项，自动滑动
  effect: "fade",
  speed: 600,
  autoplay: {
    delay: 4000
  }
});