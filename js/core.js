/* ----------------------------------------- */
/* ----Acciones para MAAGTICSI --------------
--Autor: Ariel Páez (Arimasen) por Espacio360
---------------------------------------------*/

$(function() {
	/* Para que se despliegue en l abarra de navegación los submenúes al poner 
	el mouse encima*/
	$("ul.pestagnas li a").click(function(event){
		event.preventDefault();
		$("ul.pestagnas li a").removeClass("active");
		$(this).addClass("active");
		$(".actividades").css("display","none");
		var estaAct = $(this).attr("ver");
		$("#"+estaAct).css("display","block");
	});

	/*  POSICIÓN Y ANIMACiÓN DEL SIDEBAR
		Presente en todos los HTMLs principales, hay un <span id="medidor">, cuyo
		atributo "display" varía dependiendo del tamagno de la ventana del navegador,
		usando un atributo CSS3 @media (definido en basico.css).

		En caso de ser la pantalla menor a 768px, tiene el valor "block". 
		En caso contrario, "display" tiene el valor "inline".
		
		El script determina, dependiendo del valor "display" de #medidor,
		si la barra lateral debe moverse o no, y la posición del mismo.

	 */
	$(window).scroll(function(){
		if ($("#medidor").css("display") == "inline" ){
			//--> Si la pantalla es mayor a 768px
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
			//--> Si la pantalla es menor a 768px
		}

	});
	/* PARA ACTIVAR LA FUNCIÓN DE DESPLEGABLE DEL MENÚ, SEGÚN TAMAGNO 
	VVaría entre desplegable con click o con mouseover.
	 */
    if ($("#medidor").css("display") != "inline" ){
    	//--> Si la pantalla es menor a 768px:
    	$("ul.nav>li.dropdown>a").addClass("dropdown-toggle").attr("data-toggle","dropdown");
	} else{
		//--> Si la pantalla es mayor a 768px:
		$("ul.nav>li.dropdown>a").removeClass("dropdown-toggle").attr("data-toggle","");
	}

	/*	CORRE LA MISMA FUNCIÓN CUANDO SE MODIFIQUE EL TAMAÑO DEL NAVEGADOR */
	$( window ).resize(function() {
		if ($("#medidor").css("display") != "inline" ){
    	$("ul.nav>li.dropdown>a").addClass("dropdown-toggle").attr("data-toggle","dropdown");
	} else{
		$("ul.nav>li.dropdown>a").removeClass("dropdown-toggle").attr("data-toggle","");
	}
	});

	/* 	PARA EL BOTÓN DE SUBIR DE LA SIDEBAR */
    var duration = 500;
    $("#btn_subir").click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    /*  PARA DESPLEGAR UNA VENTANA COMO POP-UP, DE LOS BOTONES DEL SIDEBAR */
   $(".ventanas").fancybox({
		maxWidth	: 800,
		maxHeight	: 900,
		fitToView	: true,
		width		: '70%',
		height		: '90%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
	});

});
//Variables para scroller de lateral
var $sidebar   = $("#sidebar"),
        $window    = $(window),
        offset     = $sidebar.offset();
