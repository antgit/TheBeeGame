/// <binding AfterBuild='less' />
var gulp = require("gulp"),
    less = require("gulp-less");

gulp.task("less", function () {
    gulp.src("./wwwroot/styles/styles.less")
        .pipe(less())
        .pipe(gulp.dest("./wwwroot/styles"));
});