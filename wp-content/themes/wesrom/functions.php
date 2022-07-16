<?php
/**
 * This file contains or includes all the actions and hooks added by the theme.
 */

/**
 * Enqueue the theme stylesheet.
 */
add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style(
		'wescom-styles',
		get_template_directory_uri() . '/assets/css/style.css',
		array(),
		wp_get_theme()->get( 'Version' ) . rand()
	);
	wp_enqueue_style(
		'wescom-fonts',
		'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap',
		array(),
		wp_get_theme()->get( 'Version' )
	);
} );
