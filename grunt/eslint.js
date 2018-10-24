module.exports = {
  options: {
    configFile: '.eslintrc.yaml'
  },
  server: ['Gruntfile.js',
           'app.js',
           'server.js',
           'grunt/**/*.js',
           'config/**/*.js'],
  test: ['test/**/*.js'],
  lib: ['lib/**/*.js', '!lib/**/*spec.js', '!lib/**/vendor/**/*.js'],
  views: ['views/**/*.js', '!views/**/*spec.js'],
  etc: ['logs/**/*']
};
