const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');



    mix.scripts([
        'resources/js/jsfront/bootsnav.js',
        'resources/js/jsfront/bootstrap.min.js',
        'resources/js/jsfront/fontawesome.js',
        'resources/js/jsfront/jquery.marquee.js',
        'resources/js/jsfront/man.js',
        'resources/js/jsfront/responsive-slider.js',
    ], 'public/js/all.js');

    mix.styles([
        'resources/css/bootsnav.css',
        'resources/css/bootstrap.min.css',
        'resources/css/my-css.css',
        'resources/css/responsive-slider.css',
        'resources/css/style.css',
    ], 'public/css/all.css');
