$(document).ready(function(){


/*РАНДОМНИЙ ФОН*/
/*function GetNumber (min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
} 

const N=3;


var num =GetNumber(1,N);


switch(num){
   case 1: { $('body').css("background-image", "url(img/fon-priroda18.jpg)"); $('body').css("background-size", "cover"); break;}
   case 2: {$('body').css("background-image", "url(img/imgres.jpg)"); $('body').css("background-size", "cover"); break;}
   case 3: {$('body').css("background-image", "url(img/images.jpg)"); $('body').css("background-size", "cover"); break;}

};


});*/



  $("body").mousemove(function(e){
    var moveX= (e.pageX * -1 /5);
    var moveY= (e.pageY * -1 /5);
    $(this).css("background-position", moveX + "px " + moveY + "px");
 });




  $("#Iconcontacts").click(function(){
    $("#contacts").show();
    $('#me1').hide();
    $('#Iconcontacts').hide();
    $('#Back').show();
    $('#me2').hide();
  });
  $("#Back").click(function(){
    $("#me2").show();
    $('#contacts').hide();
    $('#Iconcontacts').show();
    $("#Back").hide();
  });
});
