const childProcessOption = { cwd: __dirname, shell: true, stdio: [0, 1, 2] }
const childProcess = require('child_process')
const { sync: binaryExist } = require('command-exists')

/* Install docker client: https://davidburela.wordpress.com/2018/06/27/running-docker-on-wsl-windows-subsystem-for-linux/
  After which docker command will run WSL Docker Client to Windows Docker Engine
  ```WSL
  docker ps 
  ```
*/
export function install({ assignDockerHost = true } = {}) {
  if (binaryExist('docker')) console.log('✔ docker is installed.')
  else {
    let commandExecutable = [
      `sudo apt-get update -y && sudo apt-get upgrade -y`,
      `sudo apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common`,
      `curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -`,
      `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable nightly"`,
      `sudo apt-get update -y`,
      `sudo apt-get install -y docker-ce docker-ce-cli`,
      `sudo usermod -aG docker $USER`,
      // Additional standard container runtime - https://medium.com/@alenkacz/whats-the-difference-between-runc-containerd-docker-3fc8f79d4d6e
      // `sudo apt-get install -y containerd.io`,
    ]

    // In case of WSL2 & native docker engine, no DOCKER_HOST should be assigned - Allow access from/to WSL2 docker engine https://github.com/microsoft/WSL/issues/4321
    if (assignDockerHost) {
      // If this variable doesn't persist between PC reboots, then add `export DOCKER_HOST=tcp://127.0.0.1:2375` to .bashrc or the current shell config file, so it will run each time shell is initialized.
      commandExecutable.push(`export DOCKER_HOST=tcp://127.0.0.1:2375`)
    }

    childProcess.execSync(commandExecutable.join(' && \\\n'), childProcessOption)
  }
}

// download the latest version of Docker Compose
// 'curl -L https://github.com/docker/compose/releases/download/'+ dockerComposeVersion +'/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose''
