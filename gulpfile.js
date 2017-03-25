const gulp         = require('gulp');
const less         = require('gulp-less');
const concat       = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const tslint       = require('gulp-tslint');
const gutil        = require('gulp-util');
const fs           = require('fs');

let config = {
    less: {
        path: './src/assets/less/',
        dest: './dist/assets/css/',
        watch: [
            './src/assets/less/**/*.less'
        ]
    },
    ts: {
        path: 'src/**/*.ts'
    }
};

/**
 * Compila os arquivos less
 */
gulp.task('less', () => {

    // Gera um arquivo CSS por módulo
    fs.readdirSync(config.less.path).map((folder) => {

        let path = config.less.path + folder + '/' + folder + '.less',
            dest = config.less.dest + folder;

        return gulp.src(path)
                   .pipe(less().on('error', function(err) {
                       gutil.log(err);
                       this.emit('end');
                   }))
                   .pipe(autoprefixer({
                       browsers: ['last 2 versions'],
                       cascade: false
                   }))
                   .pipe(concat(folder + '.css'))
                   .pipe(gulp.dest(dest));
    });
});

/**
 * Validação (lint) de typescript
 */
gulp.task('tslint', () => {
    return gulp.src(config.typescript.path)
               .pipe(tslint({
                   formatter: 'prose'
               }))
               .pipe(tslint.report());
});

/**
 * Move as imagens
 */
gulp.task('move:images', function() {

    // Move imagens
    gulp.src('./src/assets/images/*')
        .pipe(gulp.dest('./dist/assets/images'));

});

/**
 * Watch
 */
gulp.task('watch', () => {

    // Less
    gulp.watch(config.less.watch, ['less']);

    // Lint
    gulp.watch(config.ts.watch, ['tslint']);
});

/**
 * Default
 */
gulp.task('default', ['less', 'watch', 'move:images']);
