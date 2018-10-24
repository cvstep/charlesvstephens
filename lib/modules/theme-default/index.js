// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x

module.exports = {
  construct: function(self, options) {
    // loads from public/js/site.js of this module
    self.pushAsset('script', 'vendor/bootstrap.bundle');
    self.pushAsset('script', 'site');
    // loads from public/css/site.less of this module
    self.pushAsset('stylesheet', 'vendor/material-theme');
    self.pushAsset('stylesheet', 'icomoon/style');
    self.pushAsset('stylesheet', 'site');


  }
}
