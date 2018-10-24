module.exports = {
  server : {
    src: ['server/**/*.js'],
    options: {
      destination: 'docs/server',
      template : 'node_modules/ink-docstrap/template',
      configure : 'node_modules/ink-docstrap/template/jsdoc.conf.json'
    }
  },
  client : {
    src: ['client/**/*.js', '!client/**/*.spec.js'],
    options: {
      destination: 'docs/client',
      configure: 'node_modules/angular-jsdoc/common/conf.json',
      template: 'node_modules/angular-jsdoc/angular-template',
      tutorial: 'tutorials',
      readme: './README.md' }
  }
};
