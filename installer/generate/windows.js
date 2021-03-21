module.exports = {
  nodePowershellDownload: function() {
    return `
Invoke-WebRequest https://nodejs.org/dist/v15.12.0/node-v15.12.0-x64.msi -O node.msi
msiexec /i node.msi /quiet /passive`
  },

  nvmPowershellDownload: function() {
    return `
Invoke-WebRequest https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip -O nvm-setup.zip
Expand-Archive -Path nvm-setup.zip -DestinationPath .
.\\nvm-setup.exe /VERYSILENT
    `
  },
}