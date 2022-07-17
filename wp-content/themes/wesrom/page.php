<?php get_header(); ?>
<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : ?>
		<?php the_post(); ?>
		<div <?php post_class(); ?> id="post-<?php the_ID(); ?>">
			<div class="entry">
				<?php the_content(); ?>
			</div>
		</div>
	<?php endwhile; ?>
<?php endif; ?>
<?php get_footer(); ?>
