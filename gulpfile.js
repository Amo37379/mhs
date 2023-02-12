const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require('gulp-sass')(require('sass'));
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");
const uglify = require('gulp-uglify');

gulp.task('sass', async function() {
    return gulp.src("app/scss/main.scss")
        .pipe(sass())
        .pipe(concat("style.css"))
        .pipe(cleanCss())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});
// gulp.task('js', async function() {
//     return gulp.src(["node_modules/owl.carousel/dist/assets/owl.carousel.min.js"])
//         .pipe(concat("owl.js"))
//         .pipe(uglify())
//         .pipe(gulp.dest("app/js"));
// });
gulp.task('serve', gulp.series(['sass'], async function() {
    browserSync.init({
        server: "./app/"
    });
    gulp.watch("app/scss/**/*.scss", gulp.series('sass'));
    // gulp.watch("app/js/*.js", gulp.series('js'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));