<?php

// don't load directly
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

if ( ! class_exists( 'Tribe__App_Shop' ) ) {
	/**
	 * Class that handles the integration with our Shop App API
	 */
	class Tribe__App_Shop {

		/**
		 * Slug of the WP admin menu item
		 */
		const MENU_SLUG = 'tribe-app-shop';

		/**
		 * Singleton instance
		 *
		 * @var null or Tribe__App_Shop
		 */
		private static $instance = null;
		/**
		 * The slug for the new admin page
		 *
		 * @var string
		 */
		private $admin_page = null;

		/**
		 * Class constructor
		 */
		public function __construct() {
			add_action( 'admin_menu', [ $this, 'add_menu_page' ], 100 );
			add_action( 'wp_before_admin_bar_render', [ $this, 'add_toolbar_item' ], 20 );

			$this->register_assets();
		}

		/**
		 * Adds the page to the admin menu
		 */
		public function add_menu_page() {
			if ( ! Tribe__Settings::instance()->should_setup_pages() ) {
				return;
			}

			$page_title = esc_html__( 'Event Add-Ons', 'tribe-common' );
			$menu_title = esc_html__( 'Event Add-Ons', 'tribe-common' );
			$capability = apply_filters( 'tribe_events_addon_page_capability', 'install_plugins' );

			$where = Tribe__Settings::instance()->get_parent_slug();

			$this->admin_page = add_submenu_page(
				$where,
				$page_title,
				$menu_title,
				$capability,
				self::MENU_SLUG,
				[
					$this,
					'do_menu_page',
				]
			);
		}

		/**
		 * Adds a link to the shop app to the WP admin bar
		 */
		public function add_toolbar_item() {

			$capability = apply_filters( 'tribe_events_addon_page_capability', 'install_plugins' );

			// prevent users who cannot install plugins from seeing addons link
			if ( current_user_can( $capability ) ) {
				global $wp_admin_bar;

				$wp_admin_bar->add_menu( [
					'id'     => 'tribe-events-app-shop',
					'title'  => esc_html__( 'Event Add-Ons', 'tribe-common' ),
					'href'   => Tribe__Settings::instance()->get_url( [ 'page' => self::MENU_SLUG ] ),
					'parent' => 'tribe-events-settings-group',
				] );
			}
		}

		/**
		 * Registers the plugin assets
		 */
		protected function register_assets() {
			tribe_assets(
				Tribe__Main::instance(),
				[
					[ 'tribe-app-shop-css', 'app-shop.css' ],
					[ 'tribe-app-shop-js', 'app-shop.js', [ 'jquery' ] ],
				],
				'admin_enqueue_scripts',
				[
					'conditionals' => [ $this, 'is_current_page' ],
				]
			);
		}

		/**
		 * Checks if the current page is the app shop
		 *
		 * @since 4.5.7
		 *
		 * @return bool
		 */
		public function is_current_page() {
			if ( ! Tribe__Settings::instance()->should_setup_pages() || ! did_action( 'admin_menu' ) ) {
				return false;
			}

			if ( is_null( $this->admin_page ) ) {
				_doing_it_wrong(
					__FUNCTION__,
					'Function was called before it is possible to accurately determine what the current page is.',
					'4.5.6'
				);
				return false;
			}

			return Tribe__Admin__Helpers::instance()->is_screen( $this->admin_page );
		}

		/**
		 * Renders the Shop App page
		 */
		public function do_menu_page() {
			$main = Tribe__Main::instance();
			$products = $this->get_all_products();
			$bundles = $this->get_bundles();
			$extensions = $this->get_extensions();
			include_once Tribe__Main::instance()->plugin_path . 'src/admin-views/app-shop.php';
		}

		/**
		 * Gets all products from the API
		 *
		 * @return array|WP_Error
		 */
		private function get_all_products() {
			$all_products = tribe( 'plugins.api' )->get_products();

			$products = [
				'the-events-calendar' =>      (object) $all_products['the-events-calendar'],
				'events-calendar-pro' =>      (object) $all_products['events-calendar-pro'],
<<<<<<< HEAD
				/// this is coming soon, but not yet finalized
				// 'events-virtual' =>           (object) $all_products['events-virtual'],
=======
				'events-virtual' =>           (object) $all_products['events-virtual'],
>>>>>>> master
				'event-aggregator' =>         (object) $all_products['event-aggregator'],
				'event-tickets' =>            (object) $all_products['event-tickets'],
				'event-tickets-plus' =>       (object) $all_products['event-tickets-plus'],
				'promoter' =>                 (object) $all_products['promoter'],
				'tribe-filterbar' =>          (object) $all_products['tribe-filterbar'],
				'events-community' =>         (object) $all_products['events-community'],
				'events-community-tickets' => (object) $all_products['events-community-tickets'],
				'tribe-eventbrite' =>         (object) $all_products['tribe-eventbrite'],
				'image-widget-plus' =>        (object) $all_products['image-widget-plus'],
			];

			return $products;
		}

		/**
		 * Gets product bundles
		 *
		 * @return array|WP_Error
		 */
		private function get_bundles() {
			$bundles = [
				(object) [
					'title' => __( 'Events Marketing Bundle', 'tribe-common' ),
					'logo' => 'images/logo/bundle-event-marketing.svg',
<<<<<<< HEAD
					'link' => 'https://m.tri.be/1aj3',
					'discount' => __( 'Save over 20%', 'tribe-common' ),
					'description' => __( 'Ticket sales, attendee management, and email marketing for your events.', 'tribe-common' ),
=======
					'link' => 'https://evnt.is/1aj3',
					'discount' => __( 'Save over 20%', 'tribe-common' ),
					'description' => __( 'Ticket sales, attendee management, and email marketing for your events', 'tribe-common' ),
>>>>>>> master
					'includes' => [
						'events-calendar-pro',
						'event-tickets-plus',
						'promoter',
					],
				],
				(object) [
					'title' => __( 'Event Importer Bundle', 'tribe-common' ),
					'logo' => 'images/logo/bundle-event-importer.svg',
<<<<<<< HEAD
					'link' => 'https://m.tri.be/1aj2',
=======
					'link' => 'https://evnt.is/1aj2',
>>>>>>> master
					'discount' => __( 'Save over 25%', 'tribe-common' ),
					'description' => __( 'Fill your calendar with events from across the web, including Google Calendar, Meetup, and more.', 'tribe-common' ),
					'includes' => [
						'events-calendar-pro',
						'tribe-filterbar',
						'event-aggregator'
					],
				],
<<<<<<< HEAD
				/* this is coming soon, but not yet finalized
				(object) [
					'title' => __( 'Virtual Event Marketing Bundle', 'tribe-common' ),
					'logo' => 'images/logo/bundle-virtual-events.svg',
					'link' => 'https://m.tri.be/somewhere', // code review: fix this
					'discount' => __( 'Save over 20%', 'tribe-common' ), // code review: fix this
					'description' => __( '[description]', 'tribe-common' ), // code review: fix this
=======
				(object) [
					'title' => __( 'Virtual Events Marketing Bundle', 'tribe-common' ),
					'logo' => 'images/logo/bundle-virtual-events.svg',
					'link' => 'http://evnt.is/ve-bundle',
					'discount' => __( 'Save over 20%', 'tribe-common' ),
					'description' => __( 'Streamline your online events and increase revenue.', 'tribe-common' ),
>>>>>>> master
					'includes' => [
						'events-calendar-pro',
						'event-tickets-plus',
						'events-virtual',
						'promoter',
					],
<<<<<<< HEAD
				],
				*/
				(object) [
					'title' => __( 'Community Manager Bundle', 'tribe-common' ),
					'logo' => 'images/logo/bundle-community-manager.svg',
					'link' => 'https://m.tri.be/1aj4',
=======
					'features' => [
						__( 'Sell tickets and earn revenue for online events', 'tribe-common' ),
						__( 'Zoom integration', 'tribe-common' ),
						__( 'Automated emails optimized for virtual events', 'tribe-common' ),
						__( 'Add recurring events', 'tribe-common' ),
					],
				],
				(object) [
					'title' => __( 'Community Manager Bundle', 'tribe-common' ),
					'logo' => 'images/logo/bundle-community-manager.svg',
					'link' => 'https://evnt.is/1aj4',
>>>>>>> master
					'discount' => __( 'Save over 20%', 'tribe-common' ), /* code review: fix this */
					'description' => __( 'Handle event submissions with ticket sales and everything you need to build a robust community.', 'tribe-common' ),
					'includes' => [
						'event-tickets-plus',
						'events-community',
						'events-community-tickets',
						'tribe-filterbar',
					],
				],
				(object) [
					'title' => __( 'Ultimate Bundle', 'tribe-common' ),
					'logo' => 'images/logo/bundle-ultimate.svg',
<<<<<<< HEAD
					'link' => 'https://m.tri.be/1aj5',
=======
					'link' => 'https://evnt.is/1aj5',
>>>>>>> master
					'discount' => __( 'Save over 20%', 'tribe-common' ), /* code review: fix this */
					'description' => __( 'All of our premium events management plugins at a deep discount.', 'tribe-common' ),
					'includes' => [
						'events-calendar-pro',
						'event-tickets-plus',
						//'events-virtual', // not yet added to the bundle
						'events-community',
						'events-community-tickets',
						'tribe-filterbar',
						'event-aggregator',
						'tribe-eventbrite',
						//'promoter', // not yet added to the bundle
					],
				],

			];

			return $bundles;
		}

		/**
		 * Gets product extensions
		 *
		 * @return array|WP_Error
		 */
		private function get_extensions() {
			$extensions = [
				(object) [
					'title' => __( 'Website URL CTA', 'tribe-common' ),
<<<<<<< HEAD
					'link' => 'https://m.tri.be/1aj6',
=======
					'link' => 'https://evnt.is/1aj6',
>>>>>>> master
					'image' => 'images/shop/extension-web-url-cta.jpg',
					'description' => __( 'Create a strong call-to-action for attendees to "Join Webinar" instead of only sharing a website address.', 'tribe-common' ),
				],
				(object) [
					'title' => __( 'Link Directly to Webinar', 'tribe-common' ),
<<<<<<< HEAD
					'link' => 'https://m.tri.be/1aj7',
=======
					'link' => 'https://evnt.is/1aj7',
>>>>>>> master
					'image' => 'images/shop/extension-link-to-webinar.jpg',
					'description' => __( 'When users click on the event title, they’ll be taken right to the source of your event, offering a direct route to join.', 'tribe-common' ),
				],
				(object) [
					'title' => __( 'Events Happening Now', 'tribe-common' ),
<<<<<<< HEAD
					'link' => 'https://m.tri.be/1aj8',
=======
					'link' => 'https://evnt.is/1aj8',
>>>>>>> master
					'image' => 'images/shop/extension-events-happening-now.jpg',
					'description' => __( 'Use this shortcode to display events that are currently in progress, like webinars and livestreams.', 'tribe-common' ),
				],
				(object) [
					'title' => __( 'Custom Venue Links', 'tribe-common' ),
<<<<<<< HEAD
					'link' => 'https://m.tri.be/1aj9',
=======
					'link' => 'https://evnt.is/1aj9',
>>>>>>> master
					'image' => 'images/shop/extension-custom-venue-links.jpg',
					'description' => __( 'Turn the venue name for your event into a clickable URL — a great way to link directly to a venue’s website or a virtual meeting.', 'tribe-common' ),
				],
				(object) [
					'title' => __( 'Adjust Label', 'tribe-common' ),
<<<<<<< HEAD
					'link' => 'https://m.tri.be/1aja',
=======
					'link' => 'https://evnt.is/1aja',
>>>>>>> master
					'image' => 'images/shop/extension-change-label.jpg',
					'description' => __( 'Change "Events" to "Webinars," or "Venues" to "Livestream," or "Organizers" to "Hosts." Tailor your calendar for virtual events and meetings.', 'tribe-common' ),
				],
				(object) [
					'title' => __( 'Reach Attendees', 'tribe-common' ),
<<<<<<< HEAD
					'link' => 'https://m.tri.be/1ajc',
=======
					'link' => 'https://evnt.is/1ajc',
>>>>>>> master
					'image' => 'images/shop/extension-advanced-options.jpg',
					'description' => __( 'From registration to attendance history, view every step of the event lifecycle with this HubSpot integration.', 'tribe-common' ),
				],
			];

			return $extensions;
		}

		/**
		 * Static Singleton Factory Method
		 *
		 * @return Tribe__App_Shop
		 */
		public static function instance() {
			if ( ! isset( self::$instance ) ) {
				$className      = __CLASS__;
				self::$instance = new $className;
			}

			return self::$instance;
		}
	}
}
