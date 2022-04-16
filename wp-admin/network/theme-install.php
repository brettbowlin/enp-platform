<?php
/**
 * Install theme network administration panel.
 *
 * @package WordPress
 * @subpackage Multisite
 * @since 3.1.0
 */

<<<<<<< HEAD
if ( isset( $_GET['tab'] ) && ( 'theme-information' == $_GET['tab'] ) ) {
=======
if ( isset( $_GET['tab'] ) && ( 'theme-information' === $_GET['tab'] ) ) {
>>>>>>> master
	define( 'IFRAME_REQUEST', true );
}

/** Load WordPress Administration Bootstrap */
require_once __DIR__ . '/admin.php';

require ABSPATH . 'wp-admin/theme-install.php';
