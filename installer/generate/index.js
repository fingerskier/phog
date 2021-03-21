module.exports = {
  linux: require('./linux'),

  npmLogin: function(username='', password='', email='') {
    return `npx npm-cli-login -u ${username} -p ${password} -e ${email}`
  },

  npxRunner: function(package='cowsay', args='') {
    let procArgs = args
    if (args instanceof Array) procArgs = args.join(' ')
    return `npx ${package} ${procArgs}`
  },

  nvmSetup: function(version='15.12') {
    return `nvm install ${version}@latest && nvm use ${version}@latest`
  },

  toFile: async function(filepath, contents) {
    const fs = require('fs').promises

    await fs.writeFile(filepath, contents)
  },

  windows: require('./windows'),
}