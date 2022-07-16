<?php
/**
 * This file contains or includes all the actions and hooks added by the theme.
 */

/**
 * Enqueue the theme stylesheet.
 */
add_action(
	'wp_enqueue_scripts',
	function() {
		wp_enqueue_style(
			'wescom-styles',
			get_template_directory_uri() . '/assets/css/style.css',
			[],
			wp_get_theme()->get( 'Version' ) . wp_rand()
		);
		wp_enqueue_style(
			'wescom-fonts',
			'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap',
			[],
			wp_get_theme()->get( 'Version' )
		);
	}
);

/**
 * Register WordPress Menus.
 */
add_action(
	'after_setup_theme',
	function() {
		register_nav_menus(
			[
				'header-main-menu' => 'Header Main Menu',
				'footer-left-menu' => 'Footer Left Menu',
				'footer-middle-menu' => 'Footer Middle Menu',
				'footer-right-menu' => 'Footer Right Menu',
				'footer-social-menu' => 'Footer Social Menu',
			]
		);
	}
);
