'use strict';
var gulp = require ("gulp"),
	livereload = require('gulp-livereload'),
	connect = require ("gulp-connect"),
	opn = require ("opn"),
	sass = require('gulp-sass');

//Запуск сервера с Live Reload
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true,
		port: 8888
	});
	opn('http://localhost:8888');
});

//Работа с HTML
gulp.task('html', function (){
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});
//Работа с CSS
gulp.task('css', function (){
	gulp.src('./app/css/*.css')
		.pipe(connect.reload());
});
//Работа с JS
gulp.task('js', function (){
	gulp.src('./app/js/*.js')
		.pipe(connect.reload());
});

//Sass компиляция

gulp.task('sass', function () {
  return gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});



//Watch
gulp.task('watch', function() {
	var server = livereload();
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
	gulp.watch('./app/scss/**/*.scss', ['sass']);
});

//Задача по умолчанию
gulp.task('default', ['connect', 'watch']);