module.exports = {
  options: {
    execOptions: {
      stdio: 'inherit'
    }
  },
  watch: {
    command: 'grunt watch',
    options: {
      async: true,
    }
  },
  ebDeploy: {
    command: 'eb deploy --debug > ebdeploy.log'
  },
  cover: {
    command: 'node ./node_modules/istanbul/lib/cli.js cover ./node_modules/tape/bin/tape "tests/**/*.js"'
  },
  webpack: {
    command: 'npm run-script build'
  }
};
