module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'skills',
      label: 'Skills'
    },
    {
      name: 'contact',
      label: 'Contact'
    }
  ],
  park: [
    {
      type: 'projects-page',
      slug: '/projects',
      title: 'Projects',
      published: true
    },
    {
      type: 'contact',
      slug: '/contact',
      title: 'Contact',
      published: true
    },
    {
      title: 'Search',
      slug: '/search',
      type: 'apostrophe-search',
      label: 'Search',
      published: true,orphan: true
    }
  ],
  filters: {
    ancestors: {
      children: {
        areas: [ 'thumbnail' ]
      }
    }
  }
}
