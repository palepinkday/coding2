jQuery(document).ready(function () {
  $(".imgslide a:gt(0)").hide();
  setInterval(() => {
    $(".imgslide a:first")
      .fadeOut(1000)
      .next("a")
      .fadeIn(1000)
      .end()
      .appendTo(".imgslide");
  }, 3000);
  //   $(function () {
  $(".tabmenu>li>a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
    return false;
  });
  //   });

  $(".notice>ul>li:first").click(() => {
    $(".modal").addClass("active");
  });
  $(".btn").click(() => {
    $(".modal").removeClass("active");
  });
});
