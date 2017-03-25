const gulp   = require('gulp');
const tslint = require('gulp-tslint');
const watch  = require('gulp-watch');

let config = {
    ts: {
        path: 'src/**/*.ts'
    }
};

/**
 * Validação (lint) de typescript
 */
gulp.task('tslint', () => {
    return gulp.src(config.ts.path)
               .pipe(tslint({
                   formatter: 'prose'
               }))
               .pipe(tslint.report());
});

/**
 * Watch
 */
gulp.task('watch', () => {

    // Lint
    gulp.watch(config.ts.watch, ['tslint']);
});

/**
 * Default
 */
gulp.task('default', ['tslint', 'watch']);
