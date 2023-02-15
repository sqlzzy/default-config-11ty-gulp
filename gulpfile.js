const babel = require('gulp-babel');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

// Styles

gulp.task('styles-article:sass-to-css', () => {
    return gulp.src('./src/articles/**/style.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(postcss([
            require('postcss-import'),
            require('postcss-csso')
        ]))
        .on('error', console.error.bind(console))
        .pipe( gulp.dest('./dist/articles/') );
});

gulp.task('styles-assets:sass-to-css', () => {
    return gulp.src('./src/assets/styles/main-style.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(postcss([
            require('postcss-import'),
            require('postcss-csso')
        ]))
        .on('error', console.error.bind(console))
        .pipe( gulp.dest('./dist/assets/') );
});

// Scripts

gulp.task('scripts:compress', () => {
    return gulp.src('./src/**/**/demos/(|**/)*.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./dist/'));
});

// Build

gulp.task('build', gulp.series(
    'styles-article:sass-to-css',
    'styles-assets:sass-to-css',
    'scripts:compress',
));