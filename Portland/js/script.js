var Swidth = document.body.clientWidth;
  var mobile_menu = true;
var $menu_m = $("#mobile_menu_item");
  
  if (Swidth < 900) {
    $('#nav').css('display', 'inline-block');
    //$('#nav').css('position', 'fixed');
    $('#menu').css('display', 'none');
    

    $(window).scroll(function(){
         if ( $(this).scrollTop() > 50 && $menu_m.hasClass("default") ){
            $menu_m.fadeOut('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 50 && $menu_m.hasClass("fixed")) {
                $menu_m.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });//scroll
        
       $menu_m.hover(
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).removeClass('transbg');
                }
            },
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).addClass('transbg');
                }
            });//hover


    $("#toggle_menu").click(function () {
          $("#div_mobile_menu").slideToggle("slow");
    });
      $("#back").click(function () {
          $("#div_mobile_menu").slideToggle("slow");
    });
  }else{

    var $menu = $("#menu");
    
    
    
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("default")
                           .addClass("fixed transbg")
                           .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("default")
                           .fadeIn('fast');
                });
            }
        });//scroll
        
       $menu.hover(
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).removeClass('transbg');
                }
            },
            function(){
                if( $(this).hasClass('fixed') ){
                    $(this).addClass('transbg');
                }
            });//hover


}

$(".mobile_filter").click(function(){
  $('.left_panel').slideToggle("slow");
});

    $("#TopSales .main_panel").click(function () {
          $("#TopSales .secondary_panel").slideToggle("slow");
          $("#TopSales .secondary_panel").css('display', 'inline-block');
    });
    $("#BrandFocus .main_panel").click(function () {
          $("#BrandFocus .secondary_panel").slideToggle("slow");
          $("#BrandFocus .secondary_panel").css('display', 'inline-block');
    });
    $("#HiTech .main_panel").click(function () {
          $("#HiTech .secondary_panel").slideToggle("slow");
          $("#HiTech .secondary_panel").css('display', 'inline-block');
    });
    $("#PHome .main_panel").click(function () {
          $("#PHome .secondary_panel").slideToggle("slow");
          $("#PHome .secondary_panel").css('display', 'inline-block');
    });
    $("#PSale .main_panel").click(function () {
          $("#PSale .secondary_panel").slideToggle("slow");
          $("#PSale .secondary_panel").css('display', 'inline-block');
    });