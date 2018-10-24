/*eslint no-process-env: 0*/

module.exports = {
  deploy: {
    options: {
      credentialFile: process.env['HOME']+'/.azure/creds.json'
    },
    directory: './build',
    websiteName: 'testWebsite'
  },
};
