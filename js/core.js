/* ----------------------------------------- */
/* ----Acciones para MAAGTICSI --------------
--Autor: Ariel Páez (Arimasen) por Espacio360
---------------------------------------------*/

/* index.html */
$("#btn_index").click(function(){
	console.log("Entra");
	window.location="acuerdo.html";
});

/* acuerdo.html */
$("#btn_acuerdo").click(function(){
	window.location="disposiciones.html";
});
$("#drop-objeto").click(function(){
	if($("#drop-objeto>h2>span").hasClass("glyphicon-chevron-down") ){
		$("#drop-objeto>h2>span").removeClass("glyphicon-chevron-down");
		$("#drop-objeto>h2>span").addClass("glyphicon-chevron-up");}
	else{
		$("#drop-objeto>h2>span").removeClass("glyphicon-chevron-up");
		$("#drop-objeto>h2>span").addClass("glyphicon-chevron-down");
	}
});
$("#drop-aplicacion").click(function(){
	if($("#drop-aplicacion>h2>span").hasClass("glyphicon-chevron-down") ){
		$("#drop-aplicacion>h2>span").removeClass("glyphicon-chevron-down");
		$("#drop-aplicacion>h2>span").addClass("glyphicon-chevron-up");}
	else{
		$("#drop-aplicacion>h2>span").removeClass("glyphicon-chevron-up");
		$("#drop-aplicacion>h2>span").addClass("glyphicon-chevron-down");
	}
});
$("#drop-definiciones").click(function(){
	if($("#drop-definiciones>h2>span").hasClass("glyphicon-chevron-down") ){
		$("#drop-definiciones>h2>span").removeClass("glyphicon-chevron-down");
		$("#drop-definiciones>h2>span").addClass("glyphicon-chevron-up");}
	else{
		$("#drop-definiciones>h2>span").removeClass("glyphicon-chevron-up");
		$("#drop-definiciones>h2>span").addClass("glyphicon-chevron-down");
	}
});


$(function() {

	$("ul.pestagnas li a").click(function(event){
		event.preventDefault();
		$("ul.pestagnas li a").removeClass("active");
		$(this).addClass("active");
		$(".actividades").css("display","none");
		var estaAct = $(this).attr("ver");
		$("#"+estaAct).css("display","block");
	});

	$(window).scroll(function(){
		if ($("#medidor").css("width") == "1px" ){

			if ($window.scrollTop() > offset.top) {
	            $("#sidebar").stop().animate({
	 				"marginTop": ($(window).scrollTop() - offset.top) + "px"
	 			}, "slow" );
	        } else {
	    		$("#sidebar").stop().animate({
	 				"marginTop": 0 + "px"
	 			}, "slow" );
	        }
		} else{
			console.log("NA"+$("#medidor").css("width"));
		}

	});




/*==============
    FOR TEST PURPOSES */

    if ($("#medidor").css("width") != "1px" ){
    	$("ul.nav>li.dropdown>a").addClass("dropdown-toggle").attr("data-toggle","dropdown");
	} else{
		$("ul.nav>li.dropdown>a").removeClass("dropdown-toggle").attr("data-toggle","");
	}

	$( window ).resize(function() {
		if ($("#medidor").css("width") != "1px" ){
			console.log("Debe cambiar");
    	$("ul.nav>li.dropdown>a").addClass("dropdown-toggle").attr("data-toggle","dropdown");
	} else{
		console.log("Debe quitar classes");
		$("ul.nav>li.dropdown>a").removeClass("dropdown-toggle").attr("data-toggle","");
	}
	});


     	
     	/*$(window).scroll(function(){
		if ($("#medidor").css("width") == "1px" ){

			if ($window.scrollTop() > offset.top) {
	            $("#sidebar").stop().animate({
	 				"marginTop": ($(window).scrollTop() - offset.top) + "px"
	 			}, "slow" );
	        } else {
	    		$("#sidebar").stop().animate({
	 				"marginTop": 0 + "px"
	 			}, "slow" );
	        }
		} else{
			console.log("NA"+$("#medidor").css("width"));
		}

	});*/




    /*==========*/


    var duration = 500;
    
    $("#btn_subir").click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })

});
//Variables para scroller de lateral
var $sidebar   = $("#sidebar"),
        $window    = $(window),
        offset     = $sidebar.offset();

