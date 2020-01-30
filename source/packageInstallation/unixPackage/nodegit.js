const childProcess = require('child_process')
const childProcessOption = { cwd: __dirname, shell: true, stdio: [0, 1, 2] }

/* 
NodeGit npm packge - Required preinstall packages: 
    - https://packages.debian.org/source/sid/libgit2 https://github.com/libgit2/libgit2
    libgit2 unix package is a dependency for nodegit npm package.
    (do not use development version `libgit2-dev`, use the stable one instead.)
    - Optional dependencies: https://salsa.debian.org/debian/libgit2#optional-dependencies
        - https://packages.debian.org/source/jessie/openssl
Note: that the package versin may not support the latest nodejs version, e.g. nodegit@next supports Nodejs 12 while the former versions throw errors during installation.
Note: the package exists for latest debian/ubuntu releases. Some releases support only older versions.

# If errors occur try installing the following packages:
https://stackoverflow.com/questions/37634883/installing-libgit2-and-pygit2-on-debian-docker
```
    DEBIAN_FRONTEND=noninteractive sudo apt-get update -qq && DEBIAN_FRONTEND=noninteractive sudo apt-get install -yqq openssl libssl-dev libgit2-27 libssh2-1-dev  libffi-dev  zlib1g-dev python-cffi python-dev  python-pip build-essential cmake  gcc  pkg-config  git libhttp-parser-dev python-setuptools wget
```
*/

/*
To turn on experimental packages and use the experimental libgit2 latest version: 
check linux version then verify the existence of the packge in the debian packages for the release. e.g. https://packages.debian.org/experimental/libgit2-28
  `lsb_release -a`
add experimental packages to sources:
  `
    echo "deb http://ftp.debian.org/debian experimental main contrib non-free" | sudo tee /etc/apt/sources.list.d/experimental.list
    apt-get update
  ` 
install experimental pacakge using experimental sources:
  `
  apt-get --target-release experimental install libgit2-28
  `
Example: for Debian 10 (Buster) and nodegit 0.26 requires libgit2-28 to work, but libgit2-28 is still in experimental distribution. Trying to install it results in an error 'libgit2-28 : Depends: libhttp-parser2.9 (>= 2.1) but it is not installable'
Therefore using a previous version of nodegit (0.25) will depend on a stable version libgit2-27.
Another issue is the dependency of nodegit npm module on a specific node installation version. Seems like the nodegit 0.25 doesn't work on node 13. only previous versions node <13
Important conclusions: 
  - NodeGit npm package seems to be tightly dependent on NodeJS version.
  - NodeGit depends on LibGit2 version.
  - LibGit2 depends on linux ditribution.
*/
export function install({ shouldThrow = true } = {}) {
  try {
    let libgit2PackageVersion = `libgit2-27` // Importatnt! When upgrade the version make sure the nodejs packge `nodegit` which depends on `libgit2` supports the version.
    // for Ubuntu 19+ or Debian 10+ (i.e. package `libgit2-27` must exist)
    let packagesInstalled = childProcess
      .execSync(`list="$(dpkg -l)" && echo $list`, { cwd: __dirname, encoding: 'utf8' } /** to allow catching returned result */)
      .replace(/\n$/, '')
      .trim() // remove new line and white space to prevent comparison issues

    // try `dpkg -l | grep libgit2` to check version
    if (packagesInstalled.includes('libgit2')) console.log(`nodegit's dependency 'libgit2' is installed.`)
    else
      childProcess.execSync(
        [
          `echo 'Machine global peer dependency "nodegit" is required. Checking for libgit2...\n'`,
          // `-qq` = No output except for errors
          `DEBIAN_FRONTEND=noninteractive sudo apt-get install -yqq ${libgit2PackageVersion} openssl`,
          `sudo yarn global add node-pre-gyp`, // fixes errors during nodegit installations, although node-pre-gyp already exists from linux apt package manager.
        ].join(' && \\\n'),
        childProcessOption,
      )
  } catch (error) {
    if (shouldThrow) throw error
    else console.log(error)
  }
}
