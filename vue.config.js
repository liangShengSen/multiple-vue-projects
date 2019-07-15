const conf = require('./config/projectConfig')
const projectName = require('./config/project')
module.exports = {
  pages: conf.pages,
  lintOnSave: false,
  outputDir:`${projectName.name}/dist`
}