var gulp = require('gulp'),
    gp_exec = require('gulp-exec'),
    cp = require('child_process'),
    gutil = require('gutil');

// TODO Build docs

// Rebuild Jekyll
gulp.task('build-jekyll', function(code) {
    return cp.spawn('jekyll', ['build'], { stdio: 'inherit' }) // Adding incremental reduces build time.
        .on('error', function(error) {console.log(error.message)})
        .on('close', code);
});

gulp.task('default', ['build-jekyll'], function(){});
