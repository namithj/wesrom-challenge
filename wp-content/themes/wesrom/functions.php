<?php
/**
 * This file contains or includes all the actions and hooks added by the theme.
 */

require_once dirname( __FILE__ ) . '/includes/file-loader.php';
require_once dirname( __FILE__ ) . '/includes/menu-functions.php';
require_once dirname( __FILE__ ) . '/includes/patterns.php';

/**
 * Enqueue the theme stylesheets and scripts.
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
 * Enqueue the admin stylesheets and scripts.
 */
add_action(
	'admin_enqueue_scripts',
	function() {
		wp_enqueue_style(
			'wescom-fonts',
			'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap',
			[],
			wp_get_theme()->get( 'Version' )
		);
	}
);

/**
 * Enable theme features.
 */
add_action(
	'after_setup_theme',
	function() {
		add_theme_support( 'editor-styles' );
		add_editor_style( 'assets/css/editor.css' );
	}
);

