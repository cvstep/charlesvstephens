module.exports = {
  extend: '',
  name: '',
  alias: '',
  addFields: [

  ]
  construct: function(self, options) {
    self.pushAsset('stylesheet', 'module');
    self.pushAsset('script', 'module');
  }
};

