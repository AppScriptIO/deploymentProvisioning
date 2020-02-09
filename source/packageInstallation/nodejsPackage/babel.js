const childProcess = require('child_process')
const assert = require('assert')
const childProcessOption = { cwd: __dirname, shell: true, stdio: [0, 1, 2] }
const { sync: binaryExist } = require('command-exists')

export function install() {
  assert(binaryExist('yarn'), `• babel installation is dependent on 'yarn' binary existance.`)
  if (binaryExist('babel')) console.log('✔ babel is installed.')
  else childProcess.execSync(`yarn global add babel-cli babel-register`, childProcessOption)
}
