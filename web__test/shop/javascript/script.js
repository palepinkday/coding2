jQuery(document).ready(function () {
  $(".navi>li").mouseover(function () {
      $(".submenu").stop().slideDown(500);
  }).mouseout(function () {
      $(".submenu").stop().slideUp(500);
  });
    
    setInterval(function () { 
        $(".slidelist").delay(1000);
        $(".slidelist").animate({ marginLeft: -1200 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: -2400 });
        $(".slidelist").delay(2000);
        $(".slidelist").animate({ marginLeft: 0 });
        $(".slidelist").delay(2000);

    });

    $(function () {
        $(".tabmenu>li>a").click(function () {
            $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
        }); 
    });
    
    $(".notice>ul>li").click(() => {
        $(".modal").addClass("active");
    });
      $(".btn").click(() => {
        $(".modal").removeClass("active");
    });
});