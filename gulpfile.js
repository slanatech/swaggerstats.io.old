var gulp = require('gulp'),
    gp_exec = require('gulp-exec'),
    cp = require('child_process');

// TODO Build docs

// Rebuild Jekyll
gulp.task('build-jekyll', function(code) {
    return cp.spawn('jekyll', ['build'], { stdio: 'inherit' }) // Adding incremental reduces build time.
        .on('error', function(error) {gutil.log(gutil.colors.red(error.message))})
        .on('close', code);
});

gulp.task('default', ['build-jekyll'], function(){});
