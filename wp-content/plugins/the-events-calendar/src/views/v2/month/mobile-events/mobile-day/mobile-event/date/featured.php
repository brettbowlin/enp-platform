<?php
/**
 * View: Month View - Mobile Event Featured Icon
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/month/mobile-events/mobile-day/mobile-event/date/featured.php
 *
 * See more documentation about our views templating system.
 *
<<<<<<< HEAD
 * @link {INSERT_ARTCILE_LINK_HERE}
=======
 * @link http://evnt.is/1aiy
>>>>>>> master
 *
 * @version 5.1.1
 *
 * @var WP_Post $event The event post object with properties added by the `tribe_get_event` function.
 *
 * @see tribe_get_event() For the format of the event object.
 *
<<<<<<< HEAD
 * @version 5.1.1
=======
 * @version 5.3.0
>>>>>>> master
 */

if ( empty( $event->featured ) ) {
	return;
}
?>
<em
<<<<<<< HEAD
	class="tribe-events-calendar-month-mobile-events__mobile-event-datetime-featured-icon tribe-common-svgicon tribe-common-svgicon--featured"
	aria-label="<?php esc_attr_e( 'Featured', 'the-events-calendar' ); ?>"
	title="<?php esc_attr_e( 'Featured', 'the-events-calendar' ); ?>"
>
=======
	class="tribe-events-calendar-month-mobile-events__mobile-event-datetime-featured-icon"
	title="<?php esc_attr_e( 'Featured', 'the-events-calendar' ); ?>"
>
	<?php $this->template( 'components/icons/featured', [ 'classes' => [ 'tribe-events-calendar-month-mobile-events__mobile-event-datetime-featured-icon-svg' ] ] ); ?>
>>>>>>> master
</em>
<span class="tribe-events-calendar-month-mobile-events__mobile-event-datetime-featured-text">
	<?php esc_html_e( 'Featured', 'the-events-calendar' ); ?>
</span>
