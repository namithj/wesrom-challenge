<?php
add_action(
	'init',
	function () {
		wp_enqueue_script(
			'wesrom-contact-form',
			get_template_directory_uri() . '/blocks/contact-form/block.build.js',
			[
				'wp-blocks',
				'wp-element',
				'wp-editor',
				'wp-i18n',
			],
			'1.0.0'
		);

		register_block_type(
			'wesrom/contact-form',
			[
				'editor_script' => 'wesrom-contact-form',
			]
		);
	}
);
