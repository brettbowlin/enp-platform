<?php
/*
 * Kicks off site loading and adds in all resources
 */
namespace Engage\Managers;

class Theme {
	protected $managers = [];
	function __construct($managers) {
		foreach($managers as $manager) {
			$manager->run();
		}

		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );

		add_theme_support( 'menus' );
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
		add_filter( 'timber_context', array( $this, 'addToContext' ) );
		add_filter('body_class', [$this, 'bodyClass']);

		// images
		add_image_size('featured-post', 510, 310, true);

		if(!is_admin()) {
			add_action( 'init', array( $this, 'enqueue_styles' ) );
			add_action( 'init', array( $this, 'enqueue_scripts' ) );
		}
		
	}

	
	public function enqueue_styles() {
		wp_enqueue_style('google/LibreFont', 'https://fonts.googleapis.com/css?family=Libre+Franklin:400,700', false, null);
		wp_enqueue_style('engage/css', get_stylesheet_directory_uri().'/dist/css/app.css', false, null);
  	}


	public function enqueue_scripts() {
		if (is_single() && comments_open() && get_option('thread_comments')) {
			wp_enqueue_script('comment-reply');
		}
	}

	public function addToContext( $context ) {
		// $context['stuff'] = 'I am a value set in your functions.php file';
		// $context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['mainMenu'] = new \Timber\Menu('main-menu');
		$context['secondaryMenu'] = new \Timber\Menu('secondary-menu');
		$context['quickLinks'] = new \Timber\Menu('quick-links');
		$context['site'] = new \Timber\Site();
		return $context;
	}


    public function bodyClass($classes) {
    	if($_GET['vertical']) { 
    		$classes[] = 'vertical--'.$_GET['vertical'];
    	}

    	return $classes;
    }
}