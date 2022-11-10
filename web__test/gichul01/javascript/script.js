jQuery(document).ready(function () {
  $(".menu>ul>li").mouseover(function () {
    $(".submenu").stop().slideDown(500);
  });
  $(".menu>ul>li").mouseout(function () {
    $(".submenu").stop().slideUp(500);
  });

  setInterval(function () {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({ marginLeft: -960 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: -1920 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: 0 });
  });
});
