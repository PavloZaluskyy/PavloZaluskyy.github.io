$(document).ready(function(){
	/*$('.slide_1').parallax("50%", 0.1);
	$('.slide_2').parallax("50%", 0.5);
	$('.slide_3').parallax("50%", 0.1);*/

	var Swidth = document.body.clientWidth;
	var mobile_menu = true;

	//alert(Swidth);
	if (Swidth < 480) {
				/*$('.menu_mobile_block').css('position', 'fixed');*/
		$('#menu').css('display', 'none');
		
		$(".menu_mobile").click(function () {
      		$(".menu_mobile_block").slideToggle("slow");
      		$('.menu_mobile_block').css('display', 'inline-block');

		});
		}else{
			$('#positions').css('display', 'none');
		
	

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





})
function slowScroll(id){
		
		var offset=0;
		$('html, body').animate({
			scrollTop: $(id).offset().top - offset
		}, 500);
		return false;
	}	
