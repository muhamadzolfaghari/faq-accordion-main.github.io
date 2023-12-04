<?php
/**
 * Plugin Name: اعداد فرشتگان
 * Plugin URI: https://www.your-site.com/
 * Description: این یک افزونه برای یافتن اعداد فرشتگان است. با تشکر از پروشات حقیقت
 * Version: 1.0.7
 * Author: محمد ذوالفقاری
 * Author URI: https://muhamadzl.ir/
 **/

function handle_angle_numbers()
{
    $content = '<div id="root"></div>';
    $content .= '<script src="' . get_assets_url() . '{js-file}.js" type="module"></script>';
    $content .= '<link rel="stylesheet" href="' . get_assets_url() . '{css-file}.css">';
    return $content;
}

function get_assets_url()
{
    return plugin_dir_url(__FILE__) . "assets/";
}

function handle_get_angle_number()
{
    global $wpdb;
    $code = (int) $_POST["code"];

    if ($code > 999 && $code < 0) {
        http_response_code(400);
    }

    $query = "SELECT * FROM `wp_angle_numbers` WHERE code = " . $code;
    $rows = $wpdb->get_results($query);

    if ($rows) {
        $response = array(
            "result" => $rows[0]->content
        );
        wp_send_json($response);
    } else {
        http_response_code(400);
    }

    wp_die();
}

wp_enqueue_script('jquery');
wp_localize_script(
    'ajax-script',
    'ajax_object',
    array('ajax_url' => admin_url('admin-ajax.php'))
);
add_action('wp_ajax_get_angle_number', 'handle_get_angle_number');
// none admin users
add_action('wp_ajax_nopriv_get_angle_number', 'handle_get_angle_number');
add_shortcode("angle_numbers", 'handle_angle_numbers');
