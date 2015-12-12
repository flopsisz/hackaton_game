var gulp = require('gulp');
var webpack = require('gulp-webpack');


gulp.task('webpack', function () {
    return gulp.src('engine.js')
        .pipe(webpack({
            watch: true,
            module: {
                loaders: [
                    {
                        test: /.jsx?$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            output: {
                filename: "bundle.js"
            }
        }))
        //.pipe(uglify())
        .pipe(gulp.dest(''))
});