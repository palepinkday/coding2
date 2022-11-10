jQuery(document).ready(function () {
  // $('.navi>li').mouseover(function () {
  //     $('.submenu').stop().slideDown(500);
  // }).mouseout(function () {
  //     $('.submenu').stop().slideUp(500);
  // });
  // 전체내려오는 메뉴

  //     $('.navi>li').mouseover(function () {
  //     $(this).find('.submenu').stop().slideDown(500);
  // }).mouseout(function () {
  //    $(this).find('.submenu').stop().slideUp(500);
  // });
  // 개별내려오는 메뉴

  $(".navi>li")
    .mouseover(function () {
      $(".submenu").stop().slideDown(500);
      $(".menu_bg").stop().slideDown(500);
    })
    .mouseout(function () {
      $(".submenu").stop().slideUp(500);
      $(".menu_bg").stop().slideUp(500);
    });
  //백그라운드 내려오는 메뉴

  // setInterval(function () {
  //     $('.slidelist').delay(1000);
  //     $('.slidelist').animate({ marginLeft: -1200 });
  //     $('.slidelist').delay(2000);
  //     $('.slidelist').animate({ marginLeft: -2400 });
  //     $('.slidelist').delay(2000);
  //     $('.slidelist').animate({ marginLeft: 0 });
  //     $('.slidelist').delay(2000);
  // });
  // 좌우 슬라이드
  //     setInterval(function () {
  //     $('.slidelist').delay(1000);
  //     $('.slidelist').animate({ marginTop: -300 });
  //     $('.slidelist').delay(2000);
  //     $('.slidelist').animate({ marginTop: -600 });
  //     $('.slidelist').delay(2000);
  //     $('.slidelist').animate({ marginTop: 0 });
  //     $('.slidelist').delay(2000);
  // });
  //상하 슬라이드
  $(".imgslide a:gt(0)").hide();
  setInterval(() => {
    $(".imgslide a:first-child")
      .fadeOut(1000)
      .next("a")
      .fadeIn(1000)
      .end()
      .appendTo(".imgslide");
  }, 3000);
  //페이드인페이드아웃 슬라이드

  $(function () {
    $(".tabmenu>li>a").click(function () {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    });
  });
  //탭메뉴

  $(".notice ul li:first").click(function () {
    $(".modal_bg").addClass("active");
  });
  $(".btn").click(function () {
    $(".modal_bg").removeClass("active");
   });
  //모달팝업창

});
