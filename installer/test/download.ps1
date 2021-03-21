
    Invoke-WebRequest https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip -O nvm-setup.zip

    Expand-Archive -Path nvm-setup.zip -DestinationPath .
    
    .\nvm-setup.exe /VERYSILENT
    