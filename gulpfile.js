const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('test', function() {
	return gulp.src("test/**/*.es")
		.pipe(babel({
			plugins: ['transform-runtime']
		}))
		.pipe(gulp.dest("test"));
});

gulp.task('babel', function() {
	return gulp.src(["src/**/*.es"])
		.pipe(babel({
			plugins: ['transform-runtime']
		}))
		.pipe(gulp.dest("dist"));
});

gulp.task("default", ["babel"]);

gulp.task('watch', function() {
	gulp.watch("src/**/*.es", ["babel"]);
});