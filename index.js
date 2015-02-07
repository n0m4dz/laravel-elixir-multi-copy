/**
 * Created by n0m4dz on 2/7/15.
 */
var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    notify = require('gulp-notify');


elixir.extend('lxrMultiCopy', function (srcFiles, destDir, outputFile) {

    isConcat = (typeof outputFile === "undefined" || outputFile == "" || outputFile == null) ? false : true;

    gulp.task('multi-copy', function () {
        return gulp.src(srcFiles)
            .pipe(gulpif(isConcat, concat(outputFile || 'concatFile')))
            .pipe(gulp.dest(destDir))
            .pipe(notify({
                title:    "Laravel Elixir",
                message:  "Copy files - completed!",
                icon: __dirname + '/../laravel-elixir/icons/pass.png'
            }))
    });
    return this.queueTask('multi-copy');
});
