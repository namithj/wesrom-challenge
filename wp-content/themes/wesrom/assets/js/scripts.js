jQuery(document).ready(function () {
	jQuery('.wp-block-columns').each(function () {
		let tallest_box = 0;
		jQuery('.services-box-type-one', this).each(function () {
			if (jQuery(this).height() > tallest_box) {
				tallest_box = jQuery(this).height();
			}
		});
		jQuery('.services-box-type-one', this).height(tallest_box);
	});

	jQuery('.wp-block-columns').each(function () {
		let tallest_box = 0;
		jQuery('.services-box-type-two', this).each(function () {
			if (jQuery(this).height() > tallest_box) {
				tallest_box = jQuery(this).height();
			}
		});
		jQuery('.services-box-type-two', this).height(tallest_box);
	});
});
