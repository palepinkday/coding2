jQuery(document).ready(function () {

    // $(function () {
    //     $(".tabmenu>li>a").click(function () { 
    //         $(this).parent().addClass("active").siblings().removeClass("active");
    //         return false;
    //     });
    // });
    
    // $(".notice>ul>li").click( ()=> {
    //     $(".modal").addClass("active");
    // });
    //   $(".btn").click( ()=> {
    //     $(".modal").removeClass("active");
    //   });
    
    
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