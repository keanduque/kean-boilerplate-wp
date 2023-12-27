# Kean&rsquo;s Boilerplate

This repo contains boilerplate for wp custom theme. Both folders use the official [@wordpress/scripts](https://www.npmjs.com/package/@wordpress/scripts) package to power the JS(X) and SCSS bundling.

After placing one of the folders in your WordPress **themes** :

1. Point your terminal towards the new example folder.
1. Run `npm install`
1. Run `npm run start` and the package will now be watching for any saved changes to your JS or SCSS files.

For custom creation of themes with sass : 
1. create new theme
1. add style.css, screenshot.jpg, index.php, functions.php
1. add src folder with :
    - index.js contains the import and script files ex : import `./styles/main.scss`
    - styles and scripts folder. 
1. add build folder without content. the content here will auto generated after the `npm run start` command on the terminal.
1. on the functions.php add the below code. this will point the location of the CSS inside build folder.

```php
function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}
add_action('wp_enqueue_scripts', 'boilerplate_load_assets');
```
6. npm init to create the package.json add the build and start scripts inside the `package.json` example below : 
```
{
  "name": "kean-theme",
  "version": "1.0.0",
  "description": "Kean theme for wordpress",
  "main": "index.js",
  "scripts": {
    "build": "wp-scripts build",
    "start": "wp-scripts start",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Kean Duque",
  "license": "ISC",
  "devDependencies": {
    "@wordpress/scripts": "^26.19.0"
  }
}

```
7. to add dependencies for Wordpress run the below command : 
```js
npm install @wordpress/scripts --save-dev
```
8. after the above command it will add node_modules and run the npm run start to compile the sass files

Enjoy using my Boilerplate.

my mind your mind!\
Keanmind
