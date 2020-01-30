const childProcess = require('child_process')
const childProcessOption = { cwd: __dirname, shell: true, stdio: [0, 1, 2] }
const assert = require('assert')
const operatingSystem = require('os')
const { sync: binaryExist } = require('command-exists')

export function install({ shouldThrow = true }) {
  if (binaryExist('rsync')) return console.log('✔ rsync executable is installed.')

  try {
    assert(
      operatingSystem
        .platform()
        .toLowerCase()
        .includes('linux'),
      `• This script must be run in WSL (wsl.exe), not Windows OS.`,
    )

    childProcess.execSync(`apt-get install rsync`, childProcessOption)
  } catch (error) {
    if (shouldThrow) throw error
    else console.log(error)
  }
}
