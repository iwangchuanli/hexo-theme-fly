hexo.on('ready', () => {
  const { version } = require('../../package.json')
  hexo.log.info(`
  ===================================================================
  hexo-theme-fly:${version}
  fork form hexo-theme-butterfly:${version}
  ===================================================================`)
})
