"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;const childProcess = require('child_process');
const assert = require('assert');
const childProcessOption = { cwd: __dirname, shell: true, stdio: [0, 1, 2] };
const { sync: binaryExist } = require('command-exists');




function install() {
  assert(binaryExist('yarn'), `• "n" node version manager installation is dependent on 'yarn' binary existance.`);
  if (binaryExist('n')) console.log('✔ "n" node version manager is installed.');else

    childProcess.execSync(`sudo yarn global add n`, childProcessOption);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9wYWNrYWdlSW5zdGFsbGF0aW9uL3VuaXhQYWNrYWdlL25vZGVWZXJzaW9uTWFuYWdlbWVudC5qcyJdLCJuYW1lcyI6WyJjaGlsZFByb2Nlc3MiLCJyZXF1aXJlIiwiYXNzZXJ0IiwiY2hpbGRQcm9jZXNzT3B0aW9uIiwiY3dkIiwiX19kaXJuYW1lIiwic2hlbGwiLCJzdGRpbyIsInN5bmMiLCJiaW5hcnlFeGlzdCIsImluc3RhbGwiLCJjb25zb2xlIiwibG9nIiwiZXhlY1N5bmMiXSwibWFwcGluZ3MiOiJxR0FBQSxNQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUF0QjtBQUNBLE1BQU1FLGtCQUFrQixHQUFHLEVBQUVDLEdBQUcsRUFBRUMsU0FBUCxFQUFrQkMsS0FBSyxFQUFFLElBQXpCLEVBQStCQyxLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdEMsRUFBM0I7QUFDQSxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBUixLQUF3QlIsT0FBTyxDQUFDLGdCQUFELENBQXJDOzs7OztBQUtPLFNBQVNTLE9BQVQsR0FBbUI7QUFDeEJSLEVBQUFBLE1BQU0sQ0FBQ08sV0FBVyxDQUFDLE1BQUQsQ0FBWixFQUF1QixrRkFBdkIsQ0FBTjtBQUNBLE1BQUlBLFdBQVcsQ0FBQyxHQUFELENBQWYsRUFBc0JFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBDQUFaLEVBQXRCOztBQUVLWixJQUFBQSxZQUFZLENBQUNhLFFBQWIsQ0FBdUIsd0JBQXZCLEVBQWdEVixrQkFBaEQ7QUFDTiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoaWxkUHJvY2VzcyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKVxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcbmNvbnN0IGNoaWxkUHJvY2Vzc09wdGlvbiA9IHsgY3dkOiBfX2Rpcm5hbWUsIHNoZWxsOiB0cnVlLCBzdGRpbzogWzAsIDEsIDJdIH1cbmNvbnN0IHsgc3luYzogYmluYXJ5RXhpc3QgfSA9IHJlcXVpcmUoJ2NvbW1hbmQtZXhpc3RzJylcblxuLyoqIElNUE9SVEFOVDogTXVzdCB1bmluc3RhbGwgY3VycmVudCBhcHQgbm9kZWpzIHBhY2thZ2UgYHN1ZG8gYXB0IHJlbW92ZSBub2RlanMgLXlgXG4gKiB3aGVuIGluc3RhbGxpbmcgYSBub2RlanMgdmVyc2lvbiBmcm9tIGBuYCBwYWNrYWdlLCBpdCB3aWxsIHJlcGxhY2UgdGhlIGJpbmFyaWVzIG9mIGN1cnJlbnRseSBpbnN0YWxsZWQgbm9uLWBuYCBkZXBlbmRlbnQuIEJ1dCB0aGUgb3JpZ2luYWwgd2lsbCBzdGlsbCBiZSBpbnN0YWxsZWQuXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gIGFzc2VydChiaW5hcnlFeGlzdCgneWFybicpLCBg4oCiIFwiblwiIG5vZGUgdmVyc2lvbiBtYW5hZ2VyIGluc3RhbGxhdGlvbiBpcyBkZXBlbmRlbnQgb24gJ3lhcm4nIGJpbmFyeSBleGlzdGFuY2UuYClcbiAgaWYgKGJpbmFyeUV4aXN0KCduJykpIGNvbnNvbGUubG9nKCfinJQgXCJuXCIgbm9kZSB2ZXJzaW9uIG1hbmFnZXIgaXMgaW5zdGFsbGVkLicpXG4gIC8vIEltcG9ydGFuYXQ6IE11c3QgaW5zdGFsbCBhcyByb290LCB0byBhbGxvdyBhbGwgdXNlcnMgdG8gdXNlIHRoZSBiaW5hcnkgKG4gY29tbWFuZCByZXF1aXJlcyByb290IHBlcm1pc3Npb24gdG8gbWFuYWdlIG5vZGVqcyB2ZXJzaW9uKS5cbiAgZWxzZSBjaGlsZFByb2Nlc3MuZXhlY1N5bmMoYHN1ZG8geWFybiBnbG9iYWwgYWRkIG5gLCBjaGlsZFByb2Nlc3NPcHRpb24pXG59XG4iXX0=