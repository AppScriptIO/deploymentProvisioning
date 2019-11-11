const childProcess = require('child_process')
const assert = require('assert')
const childProcessOption = { cwd: __dirname, shell: true, stdio: [0, 1, 2] }
const { sync: binaryExist } = require('command-exists')

/** IMPORTANT: Must uninstall current apt nodejs package `sudo apt remove nodejs -y`
 * when installing a nodejs version from `n` package, it will replace the binaries of currently installed non-`n` dependent. But the original will still be installed.
 * */
export function install() {
  assert(binaryExist('yarn'), `• "n" node version manager installation is dependent on 'yarn' binary existance.`)
  if (binaryExist('n')) console.log('✔ "n" node version manager is installed.')
  // Importanat: Must install as root, to allow all users to use the binary (n command requires root permission to manage nodejs version).
  else childProcess.execSync(`sudo yarn global add n`, childProcessOption)
}
