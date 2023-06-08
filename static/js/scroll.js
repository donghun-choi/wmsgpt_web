const inner = document.querySelector(".inner");
const section = document.querySelector("#sec-1");

window.onscroll = function () {
  let value = window.pageYOffset / section.offsetTop + 1;
  inner.style.transform = `scale(${value})`;
};

$(function () {
  var $window = $(window); //Window object

  var scrollTime = 1.2; //Scroll time
  var scrollDistance = 1000; //Distance. Use smaller value for shorter scroll and greater value for longer scroll

  $window.on("mousewheel DOMMouseScroll", function (event) {
    event.preventDefault();

    var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta * scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo: { y: finalScroll, autoKill: true },
      ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
      autoKill: true,
      overwrite: 5,
    });
  });
});

var $html = $("html");
var $sections = $(".content");
var page = 0;

var scrollToPage = function (pageNum) {
  if (pageNum < 0 || pageNum >= $sections.length) return;

  page = pageNum;
  var posTop = page * $(window).height();
  $html.animate({ scrollTop: posTop });
};

$(document).on("keydown", function (e) {
  if ($html.is(":animated")) return;

  if (e.key === "ArrowDown") {
    scrollToPage(page + 1);
  } else if (e.key === "ArrowUp") {
    scrollToPage(page - 1);
  }
});

var updateCurrentPage = function () {
  var scrollTop = $html.scrollTop();
  var pageIndex = Math.floor(scrollTop / $(window).height());

  if (pageIndex !== page) {
    page = pageIndex;
    console.log("Current page:", page);
  }
};

$(window).on("scroll", updateCurrentPage);
