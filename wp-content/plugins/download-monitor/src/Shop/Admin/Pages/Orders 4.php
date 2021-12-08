<?php

namespace Never5\DownloadMonitor\Shop\Admin\Pages;

use Never5\DownloadMonitor\Shop\Services\Services;
use Never5\DownloadMonitor\Shop\Util\PostType;

class Orders {

	/**
	 * Setup admin order page
	 */
	public function setup() {
		add_filter( 'dlm_admin_menu_links', array( $this, 'orders_menu' ), 30 );
	}

	/**
	 * Add settings menu item
	 */
	public function orders_menu($links) {

		// Orders page
		$links[] = array(
			'page_title' => __( 'Orders', 'download-monitor' ),
			'menu_title' => __( 'Orders', 'download-monitor' ),
			'capability' => 'manage_options',
			'menu_slug'  => 'download-monitor-orders',
			'function'   => array( $this, 'view' ),
			'priority'   => 30,
		);

		return $links;
	}

	/**
	 * Display view
	 */
	public function view() {
		if ( isset( $_GET['details'] ) && ! empty( $_GET['details'] ) ) {
			$order_id = absint( $_GET['details'] );
			try {
				/** @var \Never5\DownloadMonitor\Shop\Order\Order $order */
				$order = Services::get()->service( 'order_repository' )->retrieve_single( $order_id );

				$customer = array(
					'name'     => $order->get_customer()->get_first_name() . ' ' . $order->get_customer()->get_last_name(),
					'company'  => $order->get_customer()->get_company(),
					'street'   => $order->get_customer()->get_address_1(),
					'city'     => $order->get_customer()->get_city(),
					'postcode' => $order->get_customer()->get_postcode(),
					'country'  => Services::get()->service( 'country' )->get_country_label_by_code( $order->get_customer()->get_country() ),
					'email'    => $order->get_customer()->get_email()
				);

				$processors   = array();
				$transactions = $order->get_transactions();
				if ( ! empty( $transactions ) ) {
					foreach ( $transactions as $transaction ) {
						if ( ! in_array( $transaction->get_processor_nice_name(), $processors ) ) {
							$processors[] = $transaction->get_processor_nice_name();
						}
					}
				}

				download_monitor()->service( 'view_manager' )->display( 'order/page-order-details', array(
					'order'      => $order,
					'customer'   => $customer,
					'statuses'   => Services::get()->service( 'order_status' )->get_available_statuses(),
					'processors' => $processors
				) );
			} catch ( \Exception $exception ) {
				wp_die( __( "Order with that ID could not be found", 'download-monitor' ) );
			}

		} else {
			download_monitor()->service( 'view_manager' )->display( 'order/page-order-overview' );
		}


	}
}