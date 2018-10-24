var Promise = require('bluebird');

module.exports = {
  extend: 'apostrophe-pieces',
  name: 'project',
  label: 'Project',
  alias: 'projects',
  addFields: [
    {
      name: 'summary',
      type: 'string',
      textarea: true,
      label: 'Summary',
      required: true
    },
    {
      name: 'description',
      type: 'string',
      textarea: true,
      label: 'Description',
      required: true
    },
    {
      type: 'checkboxes',
      name: 'technologies',
      label: 'Technologies (check one or more)',
      choices: [{
          label: 'html5',
          value: 'fa-html5'
        },
        {
          label: 'css3',
          value: 'fa-css3-alt'
        },
        {
          label: 'js',
          value: 'fa-js-square'
        },
        {
          label: 'angular',
          value: 'fa-angular'
        },
        {
          label: 'react',
          value: 'fa-react'
        },
        {
          label: 'node',
          value: 'fa-node'
        },
        {
          label: 'sass',
          value: 'fa-sass'
        },
        {
          label: 'less',
          value: 'fa-less'
        },
        {
          label: 'wordpress',
          value: 'fa-wordpress'
        },
        {
          label: 'gulp',
          value: 'fa-gulp'
        },
        {
          label: 'grunt',
          value: 'fa-grunt'
        },
        {
          label: 'npm',
          value: 'fa-npm'
        },
        {
          label: 'git',
          value: 'fa-git'
        },
        {
          label: 'docker',
          value: 'fa-docker'
        },
        {
          label: 'markdown',
          value: 'fa-markdown'
        },
        {
          label: 'linux',
          value: 'fa-linux'
        },
        {
          label: 'magento',
          value: 'fa-magento'
        },
        {
          label: 'microsoft',
          value: 'fa-microsoft'
        },
        {
          label: 'r',
          value: 'fa-r-project'
        },
        {
          label: 'python',
          value: 'fa-python'
        },
        {
          label: 'slack',
          value: 'fa-slack'
        },
        {
          label: 'aws',
          value: 'fa-aws'
        },
        {
          label: 'bitbucket',
          value: 'fa-bitbucket'
        },
        {
          label: 'sith',
          value: 'fa-sith'
        }
      ]
    },
    {
      type: 'attachment',
      name: 'image',
      label: 'Image',
      group: 'image'
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      pikadayOptions: {
        format: 'DD/MM/YYYY',
        firstDay: 1
      }
    },
    {
      name: 'github-url',
      label: 'Github Address',
      type: 'string',
      textarea: false,
    },
    {
      name: 'link',
      label: 'Web Link',
      type: 'url'
    }
  ],

  construct: function(self, options) {

    // Let's use promises. We could add a "callback" argument instead
    // if we wanted to.

    self.addTask('list', 'Lists public, published projects and their URLs', (apos, argv) => { // eslint-disable-line no-unused-vars

      // We need a `req` object, but we're in a task. So
      // ask the tasks module for an "anon" req that can
      // do only what the public can do. We could also call
      // `apos.tasks.getReq()`, which lets us do anything (admin).

      const req = apos.tasks.getAnonReq();

      // Let's use apostrophe cursors, so that we only get public,
      // published projects, and the _url property is dynamically set.

      return self.find(req).toArray().then(projects => {
        projects.forEach(project => {
          console.log(project.title + ': ' + project._url);
        });
      });

      // We don't need to "catch" here because the task runner will
      // catch and display any error that rejects the promise

    });

    // Use the "super pattern" to extend the "generate" method, which
    // creates new projects when the `projects:generate` command line task
    // is run
    const superGenerate = self.generate;
    self.generate = function(i) {
      const project = superGenerate(i);
      project.price = i * 0.5;
      return project;
    };

    self.beforeInsert = function(req, piece, options, callback) {
      callback(null);
    };

  }
};
