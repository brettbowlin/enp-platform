<?php
/**
 * View: Latest Past View - Single Event Date
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/v2/latest-past/event/date.php
 *
 * See more documentation about our views templating system.
 *
<<<<<<< HEAD
 * @link {INSERT_ARTCILE_LINK_HERE}
=======
 * @link http://evnt.is/1aiy
>>>>>>> master
 *
 * @since 5.1.0
 * @since 5.1.1 Move icons into separate templates.
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
use Tribe__Date_Utils as Dates;

$event_date_attr = $event->dates->start->format( Dates::DBDATEFORMAT );

?>
<div class="tribe-events-calendar-latest-past__event-datetime-wrapper tribe-common-b2">
<<<<<<< HEAD
	<?php $this->template( 'latest-past/event/date/featured' ); ?>
=======
	<?php $this->template( 'latest-past/event/date/featured', [ 'event' => $event ] ); ?>
>>>>>>> master
	<time class="tribe-events-calendar-latest-past__event-datetime" datetime="<?php echo esc_attr( $event_date_attr ); ?>">
		<?php echo $event->schedule_details->value(); ?>
	</time>
	<?php $this->template( 'latest-past/event/date/meta', [ 'event' => $event ] ); ?>
</div>
