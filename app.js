const path = require('path');

require('apostrophe')({
  shortName: 'charlesvstephens',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    'apostrophe-email': {
      // See the nodemailer documentation, many
      // different transports are available, this one
      // matches how PHP does it on Linux servers
      nodemailer: {
        sendmail: false,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
      }
    },
    'apostrophe-login': {
      passwordReset: true,
      // The default: you have 48 hours to use a password reset link,
      // once it is sent to you
      passwordResetHours: 48,
      email: {
        from: 'password-reset@example.com'
      }
    },
    'apostrophe-address-widgets': {},
    'apostrophe-search': {},
    'one-column-widgets': {},
    'two-column-widgets': {},
    'three-column-widgets': {},
    'github-embed-widgets': { },

    'projects': {},
    'projects-pages': {},
    'projects-widgets': {
      extend: 'apostrophe-pieces-widgets'
    },


    'contact-form': {},
    'contact-form-widgets': {},


    'apostrophe-seo': {},
    'theme-default': {},
    'apostrophe-link-widgets': {},
    'apostrophe-redirects': { },
    'apostrophe-places': { },
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }}
});
