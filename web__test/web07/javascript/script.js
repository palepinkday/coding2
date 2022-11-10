jQuery(document).ready(function () {
  // 메뉴
  $(".navi>li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });
//슬라이드좌우
  // setInterval(function () {
  //   $(".slidelist").delay(2000);
  //   $(".slidelist").animate({ marginLeft: -800 });
  //   $(".slidelist").delay(2000);
  //   $(".slidelist").animate({ marginLeft: -1600 });
  //   $(".slidelist").delay(2000);
  //   $(".slidelist").animate({ marginLeft: 0 });
  //   $(".slidelist").delay(2000);
  // });

//슬라이드 상하
    setInterval(function () {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({ marginTop: -350 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: -700 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: 0 });
    $(".slidelist").delay(2000);
    });
  
//페이드인페이드아웃
  $('.imgslide a:gt(0)').hide();
  setInterval(function () {
    $('.imgslide a:first-child')
      .fadeOut()
      .next('a')
      .fadeIn()
      .end()
      .appendTo('.imgslide');
  }, 3000);
  
//탭메뉴-공지사항 갤러리
  $(function () {
    $(".tabmenu>li>a").click(function () {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    });
  });
//모달팝업창
  $(".notice li:first").click(function () {
    $(".modal").addClass("active");
  });
  $(".btn").click(function () {
    $(".modal").removeClass("active");
  });
});
