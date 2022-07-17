<?php
/**
 * This file handles menu manipulation.
 */

/**
 * Register WordPress Menus.
 */
add_action(
	'after_setup_theme',
	function() {
		register_nav_menus(
			[
				'header-main-menu'   => 'Header Main Menu',
				'footer-left-menu'   => 'Footer Left Menu',
				'footer-middle-menu' => 'Footer Middle Menu',
				'footer-right-menu'  => 'Footer Right Menu',
				'footer-social-menu' => 'Footer Social Menu',
			]
		);
	}
);

/**
 * Remove the href from menu items with class "no-link".
 */
add_filter(
	'wp_get_nav_menu_items',
	function( $items, $menu, $args ) {
		foreach ( $items as $key => $item ) {
			if ( isset( $item->classes ) && is_array( $item->classes ) && in_array( 'no-link', $item->classes, true ) ) {
				$item->url = '';
			}
		}
		return $items;
	},
	null,
	3
);
