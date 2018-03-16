
/*<!-- =============================================== -->
<!-- ========== lдатчик ========== -->
<!-- =============================================== -->*/


new FlipDown(1523867200, 'flipdown').start();

/*<!-- =============================================== -->
<!-- ========== scrollTop.js ========== -->
<!-- =============================================== -->*/
$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false;
}); 
/*<!-- =============================================== -->
<!-- ==========burger ========== -->
<!-- =============================================== -->*/

$(document).ready(function() {
	$(".main-mnu-button").click(function(){
		$(".main-mnu-button").toggleClass("opened");
		if($(".main-mnu ul").hasClass("opened")){
			$(".main-mnu ul").removeClass('fadeInRight').addClass('fadeOutRight');
		}
		else{
			$(".main-mnu ul").removeClass('fadeOutRight').addClass('animated fadeInRight');
		}
		$(".main-mnu ul").toggleClass("opened");

	});
});
	/*change logotip */	
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	//$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	// $(".block").waypoint(function(direction) {
	// 	if (direction === "down") {
	// 		$(".class").addClass("active");
	// 	} else if (direction === "up") {
	// 		$(".class").removeClass("deactive");
	// 	};
	// }, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($("#About_us"), 800, {
			offset: -90
		});
	});


	/*$(document).ready(function() {
		$('.Tovxin').animated('fadeInLeft');
		$('.main-mnu').animated('zoomIn');
		$('.all-colum').animated('fadeInLeft');
		$('.two-colum').animated('fadeInRight');
		$('.pic_iphone_3').animated('zoomInLeft');
		$('.iphone-4 ').animated('fadeInLeft');
		$('.iphone-5').animated('zoomInRight');
		$('.all-seen').animated('rotateIn');
		$('.soc-buttons').animated('zoomInLeft');
		$('second-container').animated('fadeInRight');
	});  */
/*
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('home').style.backgroundColor= scrolled==0?"red":"blue";
}   */




