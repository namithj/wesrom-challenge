<?php
add_action(
	'init',
	function () {
		register_block_pattern(
			'wesrom/home-main-banner',
			[
				'title'       => __( 'Home Main Banner', 'wesrom' ),
				'description' => __( 'This pattern contains the Home Page main banner layout', 'wesrom' ),
				'content'     => wesrom_express_load_file(
					'../patterns/home-main-banner.php', ),
				'categories'  => [ 'wesrom' ],
			]
		);

		register_block_pattern(
			'wesrom/home-main-banner',
			[
				'title'       => __( 'Services Box Type 1', 'wesrom' ),
				'description' => __( 'This pattern contains the Services Type One Box layout', 'wesrom' ),
				'content'     => wesrom_express_load_file(
					'../patterns/services-box-type-one.php' ),
				'categories'  => [ 'wesrom' ],
			]
		);
	}
);
