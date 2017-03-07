var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');
var merge2 = require('merge2');

gulp.task('build', () => {
    var tsProject = ts.createProject('tsconfig.json', { declaration: true, sortOutput: true });

    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return merge2(
        tsResult.js
            .pipe(gulp.dest('lib')),
        tsResult.dts
            .pipe(gulp.dest('typings')));
})

gulp.task('clean', del.bind(null, ["./lib", "./typings"]))
