//_____________________slick_____________________
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prew.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.svg"></button>',
//         // responsive: [
//         //     {
//         //         breakpoint: 992,
//         //         settings: {
//         //           dots: true,
//         //           arrows: false,
//         //         }  
//         //     }
//         // ]
//     });
//   $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//     $(this)
//       .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//       .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//   });
// });

//_____________________tiny-slider_____________________
// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
//   });
// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });
// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });

//_____________________owlCarousel_____________________

// $(document).ready(function(){
//   $(".carousel__inner").owlCarousel({
//     items: 1,
//     center: true,
//     dots: false
//   });
// });

// $(document).ready(function(){
//     $(".carousel__inner").owlCarousel({
//         items: 1,
//         autoWidth: true,
//         nav: true
//     });
//   });

'use stricr';

$(document).ready(function(){
	
	//_____________________tiny-slider_____________________	
	$(function() {
		const slider = tns({
			container: '.carousel__inner',
			items: 1,
			slideBy: 'page',
			autoplay: false,
			controls: false,
			nav: false,
			// responsive: {
			// 	640: {
			// 	  edgePadding: 20,
			// 	  gutter: 20,
			// 	  items: 2
			// 	},
			// 	700: {
			// 	  gutter: 30
			// 	},
			// 	900: {
			// 	  items: 3
			// 	}
			//   }
		});
			document.querySelector('.prev').addEventListener('click', function () {
				slider.goTo('prev');
			});
			document.querySelector('.next').addEventListener('click', function () {
				slider.goTo('next');
			});
	});
	
	//_____________________TABS_____________________
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass
		('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	//_____________________Switching_____________________
	// $('.catalog-item__link').each(function(i){
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	});
	// });

	// $('.catalog-item__back').each(function(i){
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	});
	// });

	//_____________________optimized switching_____________________
	function toggleSlide(item) {
		$(item).each(function(i){
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list__wrapper').eq(i).toggleClass('catalog-item__list__wrapper_active');
			});
		});
	}

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//_____________________Modal windows_____________________
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #gratitude').fadeOut('fast');
	});

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	//_____________________Form validation_____________________
	// $('#consultation-form').validate();
	// $('#consultation form').validate({
	// 	rules: {
	// 		name: {
	// 			required: true,
	// 			minlength: 2
	// 		},
	// 		phone: "required",
	// 		email: {
	// 			required: true,
	// 			email: true
	// 		}
	// 	},
	// 	messages: {
	// 		name: {
	// 			required: "Пожалуйста введите своё имя",
	// 			minlength: jQuery.validator.format("Минимальное количество введенных символов {0}")
	// 		},
	// 		phone: "Пожалуйста введите свой номер телефона",
	// 		email: {
	// 			required: "Пожалуйста введите свою почту",
	// 			email: "Ваш email должен быть в формате name@domain.com"
	// 		}
	// 	}
	// });
	// $('#order form').validate();

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста введите своё имя",
					minlength: jQuery.validator.format("Минимальное количество введенных символов {0}")
				},
				phone: "Пожалуйста введите свой номер телефона",
				email: {
					required: "Пожалуйста введите свою почту",
					email: "Ваш email должен быть в формате name@domain.com"
				}
			}
		});
	}

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	//_____________________Input mask_____________________
	$('input[name=phone]').mask("+7 (999) 999-99-99");

	//_____________________Send formInput mask_____________________
	$('form').submit(function(e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}     								//Для исключения возмодности отправки пустой формы на почту

		$.ajax({
			type: "POST",					//Указания отправки или получения данных на (с) почту (в данном случае отправка)
			url: "mailer/smart.php",		//Указывается ссылка на php файл, обработчик всей операции отправки
			data: $(this).serialize()		//Указывается конкретные данные, которые будут отправляться на почту
		}).done(function() {				//Обработка ответа от сервера, выполняется в случае успешной перелачи файлов
			$(this).find("input").val("");	//Очистка полей форм после отправки даных
			$('#consultation, #order').fadeOut(); //Отключение модальных окон после отправки формы
			$('.overlay, #gratitude').fadeIn('slow'); //Включения благодарственного модального окна

			$('form').trigger('reset'); //Строчка тоде для очистки форм после отправки данных
		});
		return false;
	});

	//_____________________Smooth scroll and page up_____________________
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	new WOW().init();

	$("a[href^='#']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	
});