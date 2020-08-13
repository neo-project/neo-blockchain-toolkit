const gulp = require('gulp');
const nbgv = require('nerdbank-gitversioning')

gulp.task('setversion', function() {
    return nbgv.setPackageVersion();
});