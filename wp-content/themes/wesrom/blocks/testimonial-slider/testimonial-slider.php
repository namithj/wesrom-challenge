<?php
add_action(
	'init',
	function () {
		wp_enqueue_script(
			'wesrom-testimonial-slider',
			get_template_directory_uri() . '/blocks/testimonial-slider/block.build.js',
			[
				'wp-blocks',
				'wp-element',
				'wp-editor',
				'wp-components',
				'wp-i18n',
			],
			'1.0.0' . rand()
		);

		register_block_type(
			'wesrom/testimonial-slider',
			[
				'editor_script' => 'wesrom-testimonial-slider',
			]
		);
	}
);
