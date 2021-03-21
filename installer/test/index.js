const generate = require('../generate')

const winDownloader = generate.windows.nvmPowershellDownload()

const loginner = generate.npmLogin('npmuser', 'super-secret', 'user@domain.test')

const runner = generate.npxRunner('cowsay', 'transplate')

generate.toFile('test\\download.ps1', winDownloader)
.then(console.log)
.catch(console.error)

generate.toFile('test\\setupDefault.cmd', generate.nvmSetup())
.then(console.log)
.catch(console.error)

generate.toFile('test\\setup14.cmd', generate.nvmSetup('14.10'))
.then(console.log)
.catch(console.error)

generate.toFile('test\\runOpen.cmd', runner)
.then(console.log)
.catch(console.error)

generate.toFile('test\\runPrivate.cmd', loginner + ' && ' + runner)
.then(console.log)
.catch(console.error)