const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function compilaSass(){
    return gulp.src('src/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dest/styles'))
}

function compilaJs(){
    return gulp.src('src/scripts/js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('dest/scripts'))
}


function compilaImages(){
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/images'))
}

exports.default = function(){
    gulp.watch('src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
}