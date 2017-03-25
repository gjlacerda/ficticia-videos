const gulp         = require('gulp');
const less         = require('gulp-less');
const concat       = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const tslint       = require('gulp-tslint');
const fs           = require('fs');

let config = {
    less: {
        path: './src/assets/less/',
        dest: './src/',
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

    let src = [];

    // Adiciona o caminho do arquivo principal de cada módulo
    fs.readdirSync(config.less.path).map((folder) => {
        let path = config.less.path + folder + '/' + folder + '.less';
        src.push(path);
    });

    return gulp.src(src)
               .pipe(less())
               .pipe(autoprefixer({
                   browsers: ['last 2 versions'],
                   cascade: false
               }))
               .pipe(concat('styles.css'))
               .pipe(gulp.dest(config.less.dest));
});

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

    // Less
    gulp.watch(config.less.watch, ['less']);

    // Lint
    gulp.watch(config.ts.path, ['tslint']);
});

/**
 * Default
 */
gulp.task('default', ['less', 'watch', 'tslint']);
