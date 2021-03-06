module.exports = {
  sanitizeHtml: {
    allowedClasses: {
      '*': ['jumbotron-heading', 'lead', 'text-muted']
    },
    allowedAttributes: {
      '*': ['style', 'href', 'target']
    },
    allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul',
    'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br',
    'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
  }
}
