const {task, src, dest} = require('gulp');
const babel = require('gulp-babel');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
task('js', () => {
    return src('./src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(dest('dist'))
} )

const sass = require('gulp-sass')(require('sass'));
let minifyCss = require('gulp-minify-css');
task('css', ()=> {
    return src('./sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat("basic.css"))
        .pipe(minifyCss())
        .pipe(dest('./css'))
});