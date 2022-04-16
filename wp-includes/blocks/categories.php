<?php
/**
 * Server-side rendering of the `core/categories` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/categories` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the categories list/dropdown markup.
 */
function render_block_core_categories( $attributes ) {
	static $block_id = 0;
	$block_id++;

	$args = array(
		'echo'         => false,
		'hierarchical' => ! empty( $attributes['showHierarchy'] ),
		'orderby'      => 'name',
		'show_count'   => ! empty( $attributes['showPostCounts'] ),
		'title_li'     => '',
	);

	if ( ! empty( $attributes['displayAsDropdown'] ) ) {
		$id                       = 'wp-block-categories-' . $block_id;
		$args['id']               = $id;
		$args['show_option_none'] = __( 'Select Category' );
<<<<<<< HEAD
		$wrapper_markup           = '<div class="%1$s">%2$s</div>';
=======
		$wrapper_markup           = '<div %1$s><label class="screen-reader-text" for="' . $id . '">' . __( 'Categories' ) . '</label>%2$s</div>';
>>>>>>> master
		$items_markup             = wp_dropdown_categories( $args );
		$type                     = 'dropdown';

		if ( ! is_admin() ) {
<<<<<<< HEAD
			$wrapper_markup .= build_dropdown_script_block_core_categories( $id );
		}
	} else {
		$wrapper_markup = '<ul class="%1$s">%2$s</ul>';
=======
			// Inject the dropdown script immediately after the select dropdown.
			$items_markup = preg_replace(
				'#(?<=</select>)#',
				build_dropdown_script_block_core_categories( $id ),
				$items_markup,
				1
			);
		}
	} else {
		$wrapper_markup = '<ul %1$s>%2$s</ul>';
>>>>>>> master
		$items_markup   = wp_list_categories( $args );
		$type           = 'list';
	}

<<<<<<< HEAD
	$class = "wp-block-categories wp-block-categories-{$type}";

	if ( isset( $attributes['align'] ) ) {
		$class .= " align{$attributes['align']}";
	}

	if ( isset( $attributes['className'] ) ) {
		$class .= " {$attributes['className']}";
	}

	return sprintf(
		$wrapper_markup,
		esc_attr( $class ),
=======
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => "wp-block-categories-{$type}" ) );

	return sprintf(
		$wrapper_markup,
		$wrapper_attributes,
>>>>>>> master
		$items_markup
	);
}

/**
 * Generates the inline script for a categories dropdown field.
 *
 * @param string $dropdown_id ID of the dropdown field.
 *
 * @return string Returns the dropdown onChange redirection script.
 */
function build_dropdown_script_block_core_categories( $dropdown_id ) {
	ob_start();
	?>
	<script type='text/javascript'>
	/* <![CDATA[ */
	( function() {
		var dropdown = document.getElementById( '<?php echo esc_js( $dropdown_id ); ?>' );
		function onCatChange() {
			if ( dropdown.options[ dropdown.selectedIndex ].value > 0 ) {
				location.href = "<?php echo home_url(); ?>/?cat=" + dropdown.options[ dropdown.selectedIndex ].value;
			}
		}
		dropdown.onchange = onCatChange;
	})();
	/* ]]> */
	</script>
	<?php
	return ob_get_clean();
}

/**
 * Registers the `core/categories` block on server.
 */
function register_block_core_categories() {
<<<<<<< HEAD
	register_block_type(
		'core/categories',
		array(
			'attributes'      => array(
				'align'             => array(
					'type' => 'string',
					'enum' => array( 'left', 'center', 'right', 'wide', 'full' ),
				),
				'className'         => array(
					'type' => 'string',
				),
				'displayAsDropdown' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'showHierarchy'     => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'showPostCounts'    => array(
					'type'    => 'boolean',
					'default' => false,
				),
			),
=======
	register_block_type_from_metadata(
		__DIR__ . '/categories',
		array(
>>>>>>> master
			'render_callback' => 'render_block_core_categories',
		)
	);
}
add_action( 'init', 'register_block_core_categories' );
