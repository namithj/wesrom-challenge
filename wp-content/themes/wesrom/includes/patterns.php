<?php
add_action(
	'init',
	function () {
		register_block_pattern(
			'wesrom/home-main-banner',
			[
				'title'       => __( 'Home Main Banner', 'wesrom' ),
				'description' => __( 'This pattern contains the Home Page main banner content', 'wesrom' ),
				'content'     => wesrom_express_load_file( '../patterns/home-main-banner.html' ),
				'categories'  => [ 'wesrom' ],
			]
		);
	}
);
