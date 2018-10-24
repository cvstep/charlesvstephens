

module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Github Embed',
  addFields: [
    {
      name: 'repo',
      type: 'string'
    },
    {
      name: 'owner',
      type: 'string'
    },
    {
      name: 'ref',
      type: 'string'
    },
    {
      name: 'embed',
      label: 'Embed',
      type: 'array',
      titleField: 'embed',
      schema: [
        {
          type: 'string',
          name: 'path',
          label: 'Path'
        },
        {
          type: 'string',
          name: 'type',
          label: 'Type'
        },
        {
          type: 'string',
          name: 'label',
          label: 'Label'
        },
        {
          type: 'boolean',
          name: 'active',
          label: 'Active'
        }
      ]
    },
  ],
  construct: function(self, options) {
    self.pushAsset('script', 'site.bundle');
    self.pushAsset('stylesheet', 'github-embed');

  }
};

