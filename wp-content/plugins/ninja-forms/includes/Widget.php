<?php if ( ! defined( 'ABSPATH' ) ) exit;
/**
 * Adds Ninja Forms widget.
 */
class NF_Widget extends WP_Widget {

    /**
     * Register widget with WordPress.
     */
    public function __construct() {
        parent::__construct(
            'ninja_forms_widget', // Base ID
            'Ninja Forms Widget', // Name
            array( 'description' => 'Ninja Forms Widget' ) // Args
        );
    }

    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {
        $form = Ninja_Forms()->form( $instance['form_id'] )->get();
        $title = $form->get_setting( 'title' );

        $title = apply_filters( 'widget_title', $title );
        $display_title = $instance['display_title'];

        echo $args[ 'before_widget' ];
        if ( ! empty( $title ) AND $display_title == 1 )
            echo $args[ 'before_title' ] . esc_html( $title ) . $args[ 'after_title' ];
        Ninja_Forms()->display( $instance['form_id'] );
        echo $args[ 'after_widget' ];
    }

    /**
     * Sanitize widget form values as they are saved.
     *
     * @see WP_Widget::update()
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     */
    public function update( $new_instance, $old_instance ) {

        $instance = array();
        $instance['form_id'] = $new_instance['form_id'];
        $instance['display_title'] = $new_instance['display_title'];

        return $instance;
    }

    /**
     * Back-end widget form.
     *
     * @see WP_Widget::form()
     *
     * @param array $instance Previously saved values from database.
     */
    public function form( $instance ) {
        if( isset( $instance['form_id'] ) ){
            $form_id = $instance['form_id'];
        }else{
            $form_id = '';
        }

        if( isset( $instance['display_title'] ) ){
            $display_title = $instance['display_title'];
        }else{
            $display_title = 0;
        }

        ?>
        <p>
            <label>
                <?php esc_html_e( 'Display Title', 'ninja-forms' ); ?>
                <input type="hidden" value="0" name="<?php echo esc_attr( $this->get_field_name( 'display_title' ) ); ?>">
                <input type="checkbox" value="1" id="<?php echo esc_attr( $this->get_field_id( 'display_title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'display_title' ) ); ?>" <?php checked( $display_title, 1 );?>>
            </label>
        </p>
        <p>
            <select id="<?php echo esc_attr( $this->get_field_id( 'form_id' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'form_id' ) ); ?>">
                <option value="0">-- <?php esc_html_e('None', 'ninja-forms');?></option>
                <?php
                $all_forms = Ninja_Forms()->form()->get_forms();

                foreach($all_forms as $form){
                    ?>
                    <option value="<?php echo intval( $form->get_id() );?>" <?php selected( $form->get_id(), $form_id );?>>
                        <?php echo esc_html( $form->get_setting( 'title' ) );?>
                    </option>
                    <?php
                }
                ?>
            </select>
        </p>

        <?php
    }

} // class Foo_Widget

/**
 * Register NF widget
 *
 * @see 'widgets_init'
 */
function NF_register_widgets() {
    register_widget( 'NF_Widget' );
}

add_action( 'widgets_init', 'NF_register_widgets' );
