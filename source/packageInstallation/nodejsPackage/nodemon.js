const childProcess = require('child_process')
const assert = require('assert')
const childProcessOption = { cwd: __dirname, shell: true, stdio: [0, 1, 2] }
const { sync: binaryExist } = require('command-exists')

export function install() {
  assert(binaryExist('yarn'), `• nodemon installation is dependent on 'yarn' binary existance.`)
  if (binaryExist('nodemon')) console.log('✔ nodemon is installed.')
  else childProcess.execSync(`yarn global add nodemon`, childProcessOption)
}
