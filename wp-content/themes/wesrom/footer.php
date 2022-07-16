	</div>
	<footer>
		<div class="container row">
			<div class="col col-3">
				<h3><?php echo wp_kses_post( wp_get_nav_menu_name( 'footer-left-menu' ) ); ?></h3>
				<?php
				wp_nav_menu(
					[
						'theme_location' => 'footer-left-menu',
						'depth'          => 1,
						'container_class'   => 'footer-menu',
					]
				);
				?>
			</div>
			<div class="col col-3">
				<h3><?php echo wp_kses_post( wp_get_nav_menu_name( 'footer-middle-menu' ) ); ?></h3>
				<?php
				wp_nav_menu(
					[
						'theme_location' => 'footer-middle-menu',
						'depth'          => 1,
						'container_class'   => 'footer-menu',
					]
				);
				?>
					
			</div>
			<div class="col col-3">
				<h3><?php echo wp_kses_post( wp_get_nav_menu_name( 'footer-right-menu' ) ); ?></h3>
				<?php
				wp_nav_menu(
					[
						'theme_location' => 'footer-right-menu',
						'depth'          => 1,
						'container_class'   => 'footer-menu',
					]
				);
				?>
			</div>
			<div class="col col-3">
				<h3><?php echo wp_kses_post( wp_get_nav_menu_name( 'footer-social-menu' ) ); ?></h3>
				<?php
				wp_nav_menu(
					[
						'theme_location' => 'footer-social-menu',
						'depth'          => 1,
						'container_id'   => 'footer-social-menu',
						'container_class'   => 'footer-menu',
					]
				);
				?>
			</div>
		</div>
	</footer>
	<?php wp_footer(); ?>
</body>
</html>
