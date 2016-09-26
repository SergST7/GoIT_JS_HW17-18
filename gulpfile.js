/**
 * Created by SergST on 26.09.2016.
 */
var gulp = require("gulp");
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var minifyCss = require('gulp-clean-css');
var imagesMin = require('gulp-image');

// задача по умолчанию
gulp.task('default', function () {
	console.log('default task');
});

//  объект с данными о путях
var CONFIG = {
	src: {
		styles: ['css/*.css'],
		scripts: ['js/libs/*.js', 'js/plugins/*.js', 'js/*.js'],
		images: 'img/*.*'
	},
	build: {
		css: 'css/build',
		js: 'js/build',
		images: 'img/build'
	}
};

// задача по сборке картинок
gulp.task('images', function () {
	return gulp.src(CONFIG.src.images)
		.pipe(imagesMin())
		.pipe(gulp.dest(CONFIG.build.images));
});

// задача по сборке стилей
gulp.task('styles', function () {
	return gulp.src(CONFIG.src.styles)
		.pipe(concat('production.css'))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest(CONFIG.build.css));
});

// задача по сборке скриптов
gulp.task('scripts', function () {
	return gulp.src(CONFIG.src.scripts)
		.pipe(concat('production.js'))
		.pipe(minify({
			ext: {
				min: '.min.js'
			}
		}))
		.pipe(gulp.dest(CONFIG.build.js));
});

// задача сборки проекта, до запуска build будут выполнены задачи из массива
gulp.task('build', ['scripts', 'styles', 'images'], function () {
	console.log('builded!');
});
