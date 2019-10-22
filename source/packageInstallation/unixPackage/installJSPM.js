"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;const childProcess = require('child_process');
const assert = require('assert');
const childProcessOption = { cwd: __dirname, shell: true, stdio: [0, 1, 2] };
const { sync: binaryExist } = require('command-exists');

function install() {
  assert(binaryExist('yarn'), `• jspm installation is dependent on 'yarn' binary existance.`);
  if (binaryExist('jspm')) console.log('✔ jspm is installed.');else
  childProcess.execSync(`yarn global add jspm`, childProcessOption);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9wYWNrYWdlSW5zdGFsbGF0aW9uL3VuaXhQYWNrYWdlL2luc3RhbGxKU1BNLmpzIl0sIm5hbWVzIjpbImNoaWxkUHJvY2VzcyIsInJlcXVpcmUiLCJhc3NlcnQiLCJjaGlsZFByb2Nlc3NPcHRpb24iLCJjd2QiLCJfX2Rpcm5hbWUiLCJzaGVsbCIsInN0ZGlvIiwic3luYyIsImJpbmFyeUV4aXN0IiwiaW5zdGFsbCIsImNvbnNvbGUiLCJsb2ciLCJleGVjU3luYyJdLCJtYXBwaW5ncyI6InFHQUFBLE1BQU1BLFlBQVksR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQyxRQUFELENBQXRCO0FBQ0EsTUFBTUUsa0JBQWtCLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxTQUFQLEVBQWtCQyxLQUFLLEVBQUUsSUFBekIsRUFBK0JDLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF0QyxFQUEzQjtBQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFSLEtBQXdCUixPQUFPLENBQUMsZ0JBQUQsQ0FBckM7O0FBRU8sU0FBU1MsT0FBVCxHQUFtQjtBQUN4QlIsRUFBQUEsTUFBTSxDQUFDTyxXQUFXLENBQUMsTUFBRCxDQUFaLEVBQXVCLDhEQUF2QixDQUFOO0FBQ0EsTUFBSUEsV0FBVyxDQUFDLE1BQUQsQ0FBZixFQUF5QkUsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBekI7QUFDS1osRUFBQUEsWUFBWSxDQUFDYSxRQUFiLENBQXVCLHNCQUF2QixFQUE4Q1Ysa0JBQTlDO0FBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGlsZFByb2Nlc3MgPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJylcclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcclxuY29uc3QgY2hpbGRQcm9jZXNzT3B0aW9uID0geyBjd2Q6IF9fZGlybmFtZSwgc2hlbGw6IHRydWUsIHN0ZGlvOiBbMCwgMSwgMl0gfVxyXG5jb25zdCB7IHN5bmM6IGJpbmFyeUV4aXN0IH0gPSByZXF1aXJlKCdjb21tYW5kLWV4aXN0cycpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbCgpIHtcclxuICBhc3NlcnQoYmluYXJ5RXhpc3QoJ3lhcm4nKSwgYOKAoiBqc3BtIGluc3RhbGxhdGlvbiBpcyBkZXBlbmRlbnQgb24gJ3lhcm4nIGJpbmFyeSBleGlzdGFuY2UuYClcclxuICBpZiAoYmluYXJ5RXhpc3QoJ2pzcG0nKSkgY29uc29sZS5sb2coJ+KclCBqc3BtIGlzIGluc3RhbGxlZC4nKVxyXG4gIGVsc2UgY2hpbGRQcm9jZXNzLmV4ZWNTeW5jKGB5YXJuIGdsb2JhbCBhZGQganNwbWAsIGNoaWxkUHJvY2Vzc09wdGlvbilcclxufVxyXG4iXX0=