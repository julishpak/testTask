
/*<!-- =============================================== -->
<!-- ========== lдатчик ========== -->
<!-- =============================================== -->*/

var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
	
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
	
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}



/*<!-- =============================================== -->
<!-- ========== scrollTop.js ========== -->
<!-- =============================================== -->*/

$(window).on('scroll', function(){
	var logo = 'images/logo.png';
	var logoScroll = 'images/logo2.png';

	if ($(this).scrollTop() > 800) {
		$('.scrollup').fadeIn('slow');
		jQuery('#home').addClass('shadow');
		jQuery('#home').css('opacity','1');
		jQuery('.logotip img').attr('src',logoScroll);
		$('#home').css('background', '#c5c5c5');
	} else {
		$('.scrollup').fadeOut('slow');
		jQuery('#home').removeClass('shadow'); 
		jQuery('.logotip img').attr('src',logo);
		$('#home').css('background','none');
	}
});
$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false;
}); 

/*<!-- =============================================== -->
<!-- ==========burger ========== -->
<!-- =============================================== -->*/



$(document).ready(function() {

	$(".main_mnu_buttons").click(function(){
		$(".main_mnu ul").slideToggle();

	}	)
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
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($("#About_us"), 800, {
			offset: -90
		});
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

//<!-- =============================================== -->
//<!-- ========== Navbar change logotip========== -->
//<!-- =============================================== -->


/*
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('home').style.backgroundColor= scrolled==0?"red":"blue";
}   */




