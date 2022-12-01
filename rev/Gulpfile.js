const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function compilaSass(){
    return gulp.src('src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('build/styles'))
}

function compilaJS(){
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('build/js'))
}

function compilaImg(){
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
}

exports.default = function(){
    gulp.watch('src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))

    gulp.watch('src/js/*.js', {ignoreInitial: false}, gulp.series(compilaJS))

    gulp.watch('src/img/*', {ignoreInitial: false}, gulp.series(compilaImg))
}