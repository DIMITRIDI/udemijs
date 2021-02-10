$(function(){
	
	$('.wework__slider-text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.wework__slider-img',
		prevArrow: '<button class="slick-btn slick-prev"><img src="img/arrow-left.png" alt="prew"></button>',
		nextArrow: '<button class="slick-btn slick-next"><img src="img/arrow-right.png" alt="next"></button>',
	});
	$('.wework__slider-img').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.wework__slider-text',
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: false,
		focusOnSelect: false,
		arrows: false,
		clickable: true,
	});

	const slider = document.querySelector('.swiper-container');

	let mySwiper = new Swiper(slider, {
		navigation: {
			nextE1: '.swiper-button-right',
			prevE1: '.swiper-button-left',
		},
		grabCursor: true,
		slidesPerView: 5,
		spaceBetween: 5,
		centeredSlides: false,
		loop: true,
		effect: 'coverflow',
		// Дополнение к coverflow
		coverflowEffect: {
			// Угол
			rotate: 35,
			// Наполнение
			stretch: 10,
			// Тень
			slideShadows: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			400: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 5,
			},
		},
		// Отключить предзагрузку картинок
		preloadImages: false,
		// Lazy Loading (подгрузка картинок)
		lazy: {
			// Подгружать на старте переключения слайда
			loadOnTransitionStart: true,
			// Подгрузить предыдущую и следующую картинки
			loadPrevNext: true,
		},
		// Слежка за вилимыми слайдами
		watchSlidesProgress: true,
		// Добавление класса видимым слайдам
		watchSlidesVisibility: true,

		// Зум картинки
		//zoom: {
			// Максимальное увеличение
			//maxRatio: 5,
			// Минимальное увеличение
			//minRatio: 2,
		//},
	});
});