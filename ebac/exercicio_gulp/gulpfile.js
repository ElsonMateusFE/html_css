const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function compilacaoSass(){
    return gulp.src('source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('build/styles'))
}

function compilacaoImg(){
    return gulp.src('source/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/imagens'))
}

function compilacaoJs(){
    return gulp.src('source/js/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('build/js'))
}

//exports.sass = compilacaoSass
//exports.javascript = compilacaoJs
//exports.images = compilacaoImg
exports.default = function(){
    gulp.watch('source/styles/*.scss', { ignoreInitial:false }, gulp.series(compilacaoSass))

    gulp.watch('source/js/*.js', { ignoreInitial:false }, gulp.series(compilacaoJs))

    gulp.watch('source/imagens/*', { ignoreInitial:false }, gulp.series(compilacaoImg))
}