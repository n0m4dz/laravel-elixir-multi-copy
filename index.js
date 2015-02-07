/**
 * Created by n0m4dz on 2/7/15.
 */
var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    notify = require('gulp-notify');


elixir.extend('multiCopy', function (copyFiles) {

    copyFiles = (typeof copyFiles === "undefined" || copyFiles === "" || copyFiles === null) ? false : copyFiles;

    if (!copyFiles) {
        gulp.task('multi-copy', function () {
            gulp.src(__dirname + "/notify-log.txt")
                .pipe(notify({
                    title: 'Laravel elixir',
                    icon: __dirname + '/../laravel-elixir/icons/laravel.png',
                    message: 'No files to copy'
                }));
        });
    }
    else {
        var copyTasks = Object.keys(copyFiles);
        copyTasks.forEach(function (key) {
            var isConcat = (typeof copyFiles[key].outputFile === "undefined" || copyFiles[key].outputFile === "" || copyFiles[key].outputFile === null) ? false : true;
            gulp.task(key, function () {
                return gulp.src(copyFiles[key].files)
                    .pipe(gulpif(isConcat, concat(copyFiles[key].outputFile || 'concatFile')))
                    .pipe(gulp.dest(copyFiles[key].dest));
            });
        });

        gulp.task('multi-copy', copyTasks, function () {
            gulp.src(__dirname + "/notify-log.txt")
                .pipe(notify({
                    title: 'Laravel Elixir',
                    icon: __dirname + '/../laravel-elixir/icons/pass.png',
                    message: 'Completed - copy files!'
                }));
        });
    }
    return this.queueTask('multi-copy');
});
