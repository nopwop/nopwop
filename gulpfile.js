var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var fs = require('fs');
var path = require('path');
var webpackStream = require('webpack-stream');
var child_process = require('child_process');

const sourceDirectory = 'src'

function getWebpackDirs(topdir) {
    return fs.readdirSync(topdir).filter(function(file) {
        if (fs.statSync(path.join(topdir, file)).isDirectory()) {
            try {
                fs.accessSync(path.join(topdir, file, 'webpack.config.js'))
            } catch (e) {
                return false
            }
            return true
        } else {
            return false
        }
    })
}


gulp.task('webpack', function(done) {
    console.log('webpack task was executed!')
    let dirs = getWebpackDirs(path.join(__dirname, sourceDirectory))
    console.log(dirs)
    dirs.forEach((dirname) => {
        let dir = path.join(sourceDirectory, dirname)
        console.log('execute in ' + dir)
        let proc = child_process.spawn('npx', ['webpack'], {cwd: dir, stdout: 'inherit'})
        proc.stdout.pipe(process.stdout)
    })
    done()
})

//js minify
gulp.task('js-minify', function(done) {
    gulp.src([
            /* accordion-ui */
            './src/accordion-ui/*.js', 
            '!./src/accordion-ui/*.min.js',
            /* include-page */
            './src/include-page/*.js', 
            '!./src/include-page/*.min.js',
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
