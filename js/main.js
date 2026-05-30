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
});