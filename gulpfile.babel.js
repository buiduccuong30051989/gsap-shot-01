'use strict';

import gulp from 'gulp';

const requireDir = require('require-dir'),
  paths = {
    views: {
      src: ['./src/views/*.pug', './src/views/pages/*.pug'],
      dist: './dist/',
      watch: ['./src/blocks/**/*.pug', './src/views/**/*.pug'],
    },
    styles: {
      src: [
        './src/styles/**/*.{scss,sass}',
        './src/blocks/**/**/*.{scss,sass}',
      ],
      dist: './dist/styles/',
      watch: [
        './src/blocks/**/**/*.{scss,sass}',
        './src/styles/**/*.{scss,sass}',
      ],
    },
    scripts: {
      src: './src/js/index.js',
      dist: './dist/js/',
      watch: ['./src/blocks/**/*.js', './src/js/**/*.js'],
    },
    images: {
      src: [
        './src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
        '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
      ],
      dist: './dist/img/',
      watch: './src/img/**/*.{jpg,jpeg,png,gif,svg}',
    },
    fonts: {
      src: './src/fonts/**/*.{woff,woff2}',
      dist: './dist/fonts/',
      watch: './src/fonts/**/*.{woff,woff2}',
    },
    favicons: {
      src: './src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
      dist: './dist/img/favicons/',
    },
  };

requireDir('./gulp-tasks/');

export { paths };

export const development = gulp.series(
  'clean',
  gulp.parallel([
    'views',
    'styles',
    'scripts',
    'images',
    'fonts',
    'favicons',
  ]),
  gulp.parallel('serve')
);

export const prod = gulp.series(
  'clean',
  gulp.parallel([
    'views',
    'styles',
    'scripts',
    'images',
    'fonts',
    'favicons',
  ])
);

export default development;
