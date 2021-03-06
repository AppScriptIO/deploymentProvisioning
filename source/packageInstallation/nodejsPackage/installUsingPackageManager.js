import filesystem from 'fs'
import assert from 'assert'
import childProcess from 'child_process'
import path from 'path'
import { sync as binaryExist } from 'command-exists'

export function installJspm({
  jspmPath, // path to the jspm configuration dependencies file.
}) {
  /*
		// switch temporarly to nodejs version that jspm install works on, then rollback.
		childProcess.execSync('n stable; jspm install; n ' + rollbackNodejsVersion, { cwd: jspmPath, shell: true, stdio:[0,1,2] });
	*/
  assert(binaryExist('jspm'), '• "jspm" binary should be installed in the environment.')
  assert(filesystem.existsSync(jspmPath), `• Directory path for package installation doesn't exist - "${jspmPath}".`)

  let packageJson = require(path.join(jspmPath, 'package.json'))
  let packageFolder = packageJson.jspm?.directories?.packages ? path.join(jspmPath, packageJson.jspm.directories.packages) : path.join(jspmPath, 'jspm_packages')

  if (!filesystem.existsSync(packageFolder)) childProcess.execSync('jspm install', { cwd: jspmPath, shell: true, stdio: [0, 1, 2] })
  else console.log('Skipping JSPM pacakges installation, as a package folder already exist.')
}

export function installYarn({ yarnPath }) {
  assert(binaryExist('yarn'), '• "yarn" binary should be installed in the environment.')
  assert(filesystem.existsSync(yarnPath), `• Directory path for package installation doesn't exist - "${yarnPath}".`)
  try {
    childProcess.execSync('yarn install -y', { cwd: yarnPath, shell: true, stdio: [0, 1, 2] })
  } catch (error) {
    console.log('• ERROR - childprocess error.')
    console.log(error)
    process.exit(1)
  }
}

export function installNpm({ npmPath, flag = ['--production=true' /*'--pure-lockfile'*/] }) {
  assert(binaryExist('npm'), '• "npm" binary should be installed in the environment.')
  assert(filesystem.existsSync(npmPath), `• Directory path for package installation doesn't exist - "${npmPath}".`)
  try {
    childProcess.spawnSync('npm', ['install', ...flag], { cwd: npmPath, shell: true, stdio: [0, 1, 2] })
  } catch (error) {
    console.log('• ERROR - childprocess error.')
    console.log(error)
    process.exit(1)
  }
}
