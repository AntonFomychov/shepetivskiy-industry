$(document).ready(function () {
	function showModal(modalId) {
		$(".close-bg").addClass("active");
		$("#" + modalId).addClass("active");
	}

	function closeAllModals() {
		$(".close-bg").removeClass("active");
		$(".modal").removeClass("active");
	}

	$(document).on("click", "[data-modal]", function (e) {
		const modalId = $(this).data("modal");
		closeAllModals();
		showModal(modalId);
	});

	$(document).on("submit", "form[data-success-modal]", function (e) {
		e.preventDefault();

		if (this.checkValidity && !this.checkValidity()) {
			this.reportValidity && this.reportValidity();
			return;
		}

		const successModalId = $(this).data("success-modal");
		if (!successModalId) {
			return;
		}

		closeAllModals();
		showModal(successModalId);
	});

	$(document).on("click", "[data-close]", function (e) {
		e.preventDefault();
		closeAllModals();
	});

	$(document).on("click", ".close-bg", function (e) {
		if (e.target === this) {
			closeAllModals();
		}
	});

	$(document).on("keydown", function (e) {
		if (e.key === "Escape") {
			closeAllModals();
		}
	});

	$(window).scroll(function stickyMenu() {
	  	var fx = $(window).scrollTop();

	  	if (fx > 100) {
	    	$('.header-wrap').addClass('fixed');
	  	} else {
	    	$('.header-wrap').removeClass('fixed');
	  	}
	})

	$('.about-us-item').on('mouseenter', function() {
	  $('.about-us-item').removeClass('active');
	  $(this).addClass('active');
	});

	$('.delivery-bottom-item-wrap').on('mouseenter', function() {
	  $('.delivery-bottom-item-wrap').removeClass('active');
	  $(this).addClass('active');
	});

	$(".faq-item-headline__icon").on("click", function () {
		const $faqItem = $(this).closest(".faq-item");
		const $content = $faqItem.find(".faq-item-content");

		$faqItem.toggleClass("active");
		$content.stop(true, true).slideToggle(300);
	});

	$('.faq-slider').each(function() {
	    new Swiper(this, {
	        slidesPerView: 1,
	        speed: 1000,
	        navigation: {
	            nextEl: $(this).closest('.faq-item-content').find('.slider-arrow--next')[0],
	            prevEl: $(this).closest('.faq-item-content').find('.slider-arrow--prev')[0],
	        },
	        breakpoints: {
	            501: { slidesPerView: 2 },
	            801: { slidesPerView: 4 },
	        },
	        on: {
	            sliderFirstMove() {
	                $(this.el).addClass('is-dragging');
	            },
	            touchEnd() {
	                $(this.el).removeClass('is-dragging');
	            },
	        }
	    });
	});
});