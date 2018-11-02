$(document).ready(function(){
	$('.slide_1').parallax("50%", 0.1);
	$('.slide_2').parallax("50%", 0.1);

	var Swidth = document.body.clientWidth;
	var mobile_menu = true;

	//alert(Swidth);
	if (Swidth < 475) {
				/*$('.menu_mobile_block').css('position', 'fixed');
		$('#menu').css('display', 'none');*/
		
		$(".menu_mobile").click(function () {
      		$(".menu_mobile_block").slideToggle("slow");
      		$('.menu_mobile_block').css('display', 'inline-block');

		});
		}else{
			$('#positions').css('display', 'none');
		}
		


	$('#select_all').click(function (){
		$('.all_news').show('slow');
		$('.started').hide();
		$('.community').hide();	 
	});
	$('#select_starts').click(function (){
		$('.started').show('slow');
		$('.all_news').hide();
		$('.community').hide();
	});
	$('#select_community').click(function (){
		$('.community').show('slow');
		$('.all_news').hide();
		$('.started').hide();
	});


	$('#search_visible').click(function(){
		$('#search_invisible').show('slow');
		$('#search_visible').hide();
	});

	
})
function like1(){
		$('.active_all_new01').show();
		$('.all_new01').hide();
		$('.number_like01').text("1");
	}
function like2(){
		$('.active_all_new02').show();
		$('.all_new02').hide();
		$('.number_like02').text("1");
	}
function like3(){
		$('.active_all_new03').show();
		$('.all_new03').hide();
		$('.number_like03').text("1");
	}

function dislike1(){
		$('.all_new01').show();
		$('.active_all_new01').hide();
		$('.number_like01').text("0");
	}
function dislike1(){
		$('.all_new01').show();
		$('.active_all_new01').hide();
		$('.number_like01').text("0");
	}
function dislike2(){
		$('.all_new02').show();
		$('.active_all_new02').hide();
		$('.number_like02').text("0");
	}
function dislike3(){
		$('.all_new03').show();
		$('.active_all_new03').hide();
		$('.number_like03').text("0");
	}