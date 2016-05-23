// gulp
var gulp = require('gulp');

// plugins
var wiredep = require('wiredep').stream;
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var connect = require('gulp-connect');


gulp.task('bower', function () {
  gulp.src('./dev/index.html')
    .pipe(wiredep())
  .pipe(gulp.dest('./dev'));
});

gulp.task('usemin', function() {
  gulp.src('./dev/index.html')
    .pipe(usemin({
      js: [uglify()],
	  appjs: ['concat']
    }))
    .pipe(gulp.dest('Release/'));
});

gulp.task('sass', function () {
  return gulp.src('./dev/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dev/css'));
});
 
gulp.task('watch', function () {	
  gulp.watch('./dev/sass/**/*.scss', ['sass']);
  gulp.watch(['./dev/css/**/*.css'], ['htmlReload']);
  gulp.watch(['./dev/**/*.html'], ['htmlReload']);
});

gulp.task('connectDev', function() {
  connect.server({
    root: './dev',
    livereload: true
  });
});

gulp.task('connect', function() {
  connect.server({
    root: './Release'
  });
});

gulp.task('htmlReload', function () {
  gulp.src('./dev/*.html')
    .pipe(connect.reload());
});

// Fonts
gulp.task('fontsDev', function() {
    return gulp.src(['./dev//bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.*'])
            .pipe(gulp.dest('./dev/fonts/bootstrap'));
});

gulp.task('fonts', function() {
    return gulp.src([
                    './dev/bower_components/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.*'])
            .pipe(gulp.dest('./Release/fonts/bootstrap'));
});

gulp.task('copy', function() {
    return gulp.src([
                    './dev/scripts/**/*.html'])
            .pipe(gulp.dest('./Release/scripts'));
});

gulp.task('copydata', function() {
    return gulp.src([
                    './dev/data/**/*.json'])
            .pipe(gulp.dest('./Release/data'));
});

gulp.task('build',['bower','sass', 'fonts','copy','copydata', 'usemin']);

gulp.task('buildDev',['bower','sass', 'fontsDev']);

gulp.task('develop',['buildDev', 'connectDev', 'watch']);

// default task
gulp.task('default',['bower']);
