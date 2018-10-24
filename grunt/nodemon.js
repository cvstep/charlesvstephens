module.exports = {
  dev: {
    script: './app.js',
    options: {
      env: {
        PORT: '3000'
      },
      ext: 'js,html,less,json',
      verbose: true,
      nodeArgs: [],
      callback: function (nodemon) {
        nodemon.on('log', function (event) {
          console.log(event.colour);
        });
      },
      ignore: ['logs/**/*', 'test.log', 'Gruntfile.js',
               'locales/*.json',
               'public/modules/**/*.less',
               'public/modules/**/*.js',
               'public/uploads',
               'public/apos-minified/*.js',
               'public/css/master-*.less',
               'data',
               'node_modules/**/*'
      ],
      watch: ['lib', 'views'],
    },
  }
};
