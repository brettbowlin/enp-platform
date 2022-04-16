<?php
/**
 * WP_User_Request class.
 *
 * Represents user request data loaded from a WP_Post object.
 *
 * @since 4.9.6
 */
final class WP_User_Request {
	/**
	 * Request ID.
	 *
<<<<<<< HEAD
=======
	 * @since 4.9.6
>>>>>>> master
	 * @var int
	 */
	public $ID = 0;

	/**
	 * User ID.
	 *
<<<<<<< HEAD
=======
	 * @since 4.9.6
>>>>>>> master
	 * @var int
	 */
	public $user_id = 0;

	/**
	 * User email.
	 *
<<<<<<< HEAD
	 * @var int
=======
	 * @since 4.9.6
	 * @var string
>>>>>>> master
	 */
	public $email = '';

	/**
	 * Action name.
	 *
<<<<<<< HEAD
=======
	 * @since 4.9.6
>>>>>>> master
	 * @var string
	 */
	public $action_name = '';

	/**
	 * Current status.
	 *
<<<<<<< HEAD
=======
	 * @since 4.9.6
>>>>>>> master
	 * @var string
	 */
	public $status = '';

	/**
	 * Timestamp this request was created.
	 *
<<<<<<< HEAD
=======
	 * @since 4.9.6
>>>>>>> master
	 * @var int|null
	 */
	public $created_timestamp = null;

	/**
	 * Timestamp this request was last modified.
	 *
<<<<<<< HEAD
=======
	 * @since 4.9.6
>>>>>>> master
	 * @var int|null
	 */
	public $modified_timestamp = null;

	/**
	 * Timestamp this request was confirmed.
	 *
<<<<<<< HEAD
	 * @var int
=======
	 * @since 4.9.6
	 * @var int|null
>>>>>>> master
	 */
	public $confirmed_timestamp = null;

	/**
	 * Timestamp this request was completed.
	 *
<<<<<<< HEAD
	 * @var int
=======
	 * @since 4.9.6
	 * @var int|null
>>>>>>> master
	 */
	public $completed_timestamp = null;

	/**
	 * Misc data assigned to this request.
	 *
<<<<<<< HEAD
=======
	 * @since 4.9.6
>>>>>>> master
	 * @var array
	 */
	public $request_data = array();

	/**
	 * Key used to confirm this request.
	 *
<<<<<<< HEAD
=======
	 * @since 4.9.6
>>>>>>> master
	 * @var string
	 */
	public $confirm_key = '';

	/**
	 * Constructor.
	 *
	 * @since 4.9.6
	 *
	 * @param WP_Post|object $post Post object.
	 */
	public function __construct( $post ) {
		$this->ID                  = $post->ID;
		$this->user_id             = $post->post_author;
		$this->email               = $post->post_title;
		$this->action_name         = $post->post_name;
		$this->status              = $post->post_status;
		$this->created_timestamp   = strtotime( $post->post_date_gmt );
		$this->modified_timestamp  = strtotime( $post->post_modified_gmt );
		$this->confirmed_timestamp = (int) get_post_meta( $post->ID, '_wp_user_request_confirmed_timestamp', true );
		$this->completed_timestamp = (int) get_post_meta( $post->ID, '_wp_user_request_completed_timestamp', true );
		$this->request_data        = json_decode( $post->post_content, true );
		$this->confirm_key         = $post->post_password;
	}
}
