jQuery(document).ready(function () {
	jQuery(window).resize(function() {
		jQuery('.wp-block-columns').each(function () {
			let tallest_box = 0;
			jQuery('.services-box-type-one', this).each(function () {
				jQuery(this).css('height', '');
				if (jQuery(this).height() > tallest_box) {
					tallest_box = jQuery(this).height();
				}
			});
			jQuery('.services-box-type-one', this).height(tallest_box);
		});
	
		jQuery('.wp-block-columns').each(function () {
			let tallest_box = 0;
			jQuery('.services-box-type-two', this).each(function () {
				jQuery(this).css('height', '');
				if (jQuery(this).height() > tallest_box) {
					tallest_box = jQuery(this).height();
				}
			});
			jQuery('.services-box-type-two', this).height(tallest_box);
		});
	}).resize();

	jQuery('.hamburger-menu input').prop('checked', false);

	jQuery('.wp-block-wesrom-contact-form form').submit(function() {
		console.log("Form Submitted.");
		return false;
	})

	jQuery('.testimonial-slides .prev-button').click(function() {
		if(!jQuery(this).hasClass('disabled')) {
			let active_slide = jQuery('.testimonial-slides .active')
			active_slide.parent().find('.testimonial-slide').removeClass('left');
			active_slide.parent().find('.testimonial-slide').removeClass('active');
			active_slide.parent().find('.testimonial-slide').removeClass('right');
			active_slide.addClass('right');
			active_slide.prev('.testimonial-slide').addClass('active');
			active_slide.prev('.testimonial-slide').prev('.testimonial-slide').addClass('left');
			if(active_slide.prev('.testimonial-slide').prev().is('.next-button')) {
				jQuery('.testimonial-slides .prev-button').addClass("disabled");
			} else {
				jQuery('.testimonial-slides .prev-button').removeClass("disabled");
				jQuery('.testimonial-slides .next-button').removeClass("disabled");
			}
		}
	});

	jQuery('.testimonial-slides .next-button').click(function() {
		if(!jQuery(this).hasClass('disabled')) {
			let active_slide = jQuery('.testimonial-slides .active')
			active_slide.parent().find('.testimonial-slide').removeClass('left');
			active_slide.parent().find('.testimonial-slide').removeClass('active');
			active_slide.parent().find('.testimonial-slide').removeClass('right');
			active_slide.addClass('left');
			active_slide.next('.testimonial-slide').addClass('active');
			active_slide.next('.testimonial-slide').next('.testimonial-slide').addClass('right');
			if(active_slide.next('.testimonial-slide').is(':last-child')) {
				jQuery('.testimonial-slides .next-button').addClass("disabled");
			} else {
				jQuery('.testimonial-slides .prev-button').removeClass("disabled");
				jQuery('.testimonial-slides .next-button').removeClass("disabled");
			}
		}
	});
});
