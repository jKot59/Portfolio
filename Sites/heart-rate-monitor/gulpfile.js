const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
// const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');


gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });
    
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.+(scss|sass)")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("dist/style"))
    .pipe(browserSync.stream());
});

gulp.task('webpack', function() {
    return gulp.src("src/js/index.js")
      .pipe(webpackStream(webpackConfig), webpack)
      .pipe(gulp.dest('src/js'))
      .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/scss/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
})

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'))
})

gulp.task('scripts', function () {
    return gulp.src("src/js/bundle.js")
        .pipe(gulp.dest('dist/js'))
})

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('icon', function () {
    return gulp.src("src/icon/**/*")
        .pipe(gulp.dest('dist/icon'))
})

gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest('dist/mailer'))
})

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        // .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})

gulp.task('logo', function () {
    return gulp.src("src/logo/**/*")
        // .pipe(imagemin())
        .pipe(gulp.dest('dist/logo'))
})


gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'webpack', 'html', 'scripts', 'fonts', 'icon', 'mailer', 'images', 'logo'));
