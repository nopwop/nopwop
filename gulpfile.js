var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//js minify
gulp.task('js-minify', function(done) {
    gulp.src([
            /* posts-with-category */
            './src/posts-with-category/*.js', 
            '!./src/posts-with-category/*.min.js',
            /* syntax-highlight */
            './src/syntax-highlight/*.js', 
            '!./src/syntax-highlight/*.min.js',
        ])
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./dist/'))
    done()
});
