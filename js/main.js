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

var indexSwiper = new Swiper("#index-banner", {
  autoplay: true, //可选选项，自动滑动
  loop : true,
  effect: "fade",
  speed: 600,
  autoplay: {
    delay: 4000
  },
  navigation: {
    nextEl: ".index-bg-next",
    prevEl: ".index-bg-prev"
  }
});

var homeSwiper = new Swiper("#home-banner-main", {
  autoplay: true, //可选选项，自动滑动
  loop: true,
  speed: 600,
  autoplay: {
    delay: 4000
  },
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination"
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var homeSwiper = new Swiper("#home-banner-small", {
  autoplay: true, //可选选项，自动滑动
  loop: true,
  speed: 600,
  autoplay: {
    delay: 4000
  }
});