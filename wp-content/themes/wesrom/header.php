<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head profile="http://gmpg.org/xfn/11">
	<meta http-equiv="Content-Type" content="<?php bloginfo( 'html_type' ); ?>; charset=<?php bloginfo( 'charset' ); ?>" />
	<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, min-scale=1.0, max-scale=1.0">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<header>
		<div class="container row">
			<a id="header-logo" class="col col-3" href="<?php bloginfo( 'url' ); ?>"></a>
			<nav id="header-nav" class="col col-9" >
				<div class="hamburger-menu">
					<input type="checkbox" />
					<span></span>
					<span></span>
					<span></span>
					<?php
					wp_nav_menu(
						[
							'theme_location' => 'header-main-menu',
							'depth'          => 1,
						]
					);
					?>
				</div>
			</nav>
		</div>
	</header>
	<div class="wp-site-blocks">
