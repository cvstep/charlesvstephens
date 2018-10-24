require('babel-polyfill');
const githubEmbed = require('github-embed');
$(function() {
  if(settings == null){
    settings = {};
  } else {
    githubEmbed('#settings-object', settings || {});
  }
});
