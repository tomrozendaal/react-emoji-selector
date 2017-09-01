module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactEmojiSelector',
      externals: {
        react: 'React'
      }
    }
  }
}
