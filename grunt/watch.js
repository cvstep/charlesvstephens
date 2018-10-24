module.exports = {
  options: {
    livereload: true,
  },
  spec: {
    files: [
      './spec/**/*.yaml',
    ],
    tasks: ['shell:build'],
  },
  server: {
    files: [
      'config/**/*.js',
      'data/**/*.js',
      'security/**/*.js',
    ],
    tasks: [],
  }
};
