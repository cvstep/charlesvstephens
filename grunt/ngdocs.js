module.exports = {
  options: {
    dest: 'docs/',
    startPage: '/api',
    titleLink: '/docs/api',
    html5Mode: true,
    template: 'config/docs/templates/index.tmpl',
    title: '<%=  lodash.capitalize(pkg.name) %> Documentation'
  },
  api: {
    src: ['config/**/index.ngdoc'],
    title: 'api',
    api: true
  }
};
