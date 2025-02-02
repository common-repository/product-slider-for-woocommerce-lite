<?php defined( 'ABSPATH' ) or die( "No script kiddies please!" ); ?>
<div class="psfw-buton-two-wrapper psfw-button">
    <?php
    if ( isset( $psfw_option[ 'psfw_button_two_link_type' ] ) && $psfw_option[ 'psfw_button_two_link_type' ] == 'product_add_cart' ) {
        if ( (isset( $psfw_option[ 'product_type' ] ) && $psfw_option[ 'product_type' ] == 'product') && class_exists( 'WooCommerce' ) ) {
            woocommerce_template_loop_add_to_cart();
        }
    } else if ( isset( $psfw_option[ 'psfw_button_two_link_type' ] ) && $psfw_option[ 'psfw_button_two_link_type' ] == 'product_detail_link' ) {
        ?>
        <a class="psfw-button-design" href="<?php the_permalink(); ?>" target="_blank">
            <?php echo esc_attr( $psfw_option[ 'psfw_button_two_text' ] ); ?>
        </a>
        <?php
    } else if ( isset( $psfw_option[ 'psfw_button_two_link_type' ] ) && $psfw_option[ 'psfw_button_two_link_type' ] == 'common_custom_link' ) {
        ?>
        <a class="psfw-button-design" href="<?php echo esc_url( $psfw_option[ 'common_link_button_two' ] ); ?>" target="_blank">
            <?php echo esc_attr( $psfw_option[ 'psfw_button_two_text' ] ); ?>
        </a>
        <?php
    } else {
        ?>
        <a class="psfw-button-design" href="<?php echo isset( $psfw_advance_option[ 'button_two_custom_link' ]) ? esc_url( $psfw_advance_option[ 'button_two_custom_link' ] ) :'';?>" target="_blank">
            <?php echo esc_attr( $psfw_option[ 'psfw_button_two_text' ] ); ?>
        </a>
        <?php
    }
    ?>
</div>