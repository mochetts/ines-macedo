const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/mep': { page: '/mep' },
      '/oficinas': { page: '/oficinas' },
      '/urbanismo': { page: '/urbanismo' },
      '/viviendas': { page: '/viviendas' }
    }
  }
}