'use strict';

(function($){
	$(document).ready(function() {
		// Code
		let sections = {
			header: $('#header').offset().top,
			about: $('#about').offset().top,
			services: $('#services').offset().top,
			gallery: $('#gallery').offset().top,
			blog: $('#blog').offset().top,
			contact: $('#contact').offset().top
		}

		$(window).scroll(function() {
			let scrTop = $(document).scrollTop() + ($(window).height() / 3),
				pos;

			if (scrTop < sections.about) {
				pos = 'header';
			} else if (scrTop >= sections.about && scrTop < sections.services) {
				pos = 'about';
			} else if (scrTop >= sections.services && scrTop < sections.gallery) {
				pos = 'services';
			} else if (scrTop >= sections.gallery && scrTop < sections.blog) {
				pos = 'gallery';
			} else if (scrTop >= sections.blog && scrTop < sections.contact) {
				pos = 'blog';
			} else if (scrTop >= sections.contact) {
				pos = 'contact';
			}

			$('.fixed-nav').find('.active').removeClass('active');
			$('.fixed-nav').find(`a[data-menu=${pos}]`).addClass('active');
		});
	});
})(jQuery);
