# phog
Project Phog Phor the win


## Tenets

* Cloud server brokers data and hosts the web-app-user-interface
* Hardware server marshals local I/O and connects to the web-app-user-interface
* The web-app-user-interface is an offline capable PWA
* `nexe` facilitates deployment of the edge app
* Felicitations are always appropriate
* You can host the web-app-user-interface in the cloud server `/public` folder or wherever...


## Development
Cloud: `npm run dev` ~ starts a server on `localhost:3210`

UX: `npm start` ~ react dev server on `localhost:3000`

Edge: `npm run dev` ~ start a server on `localhost:3456`


## Deployment

UX:
  `npm run build`
  `npm run deploy:win` ~ copies the ui files to the cloud /public folder

Edge:
  `npm run build`
  `npm run deploy:win`

__at this point__ you should be able to run the Edge program executable and the UX via the Cloud dev-server.

Cloud:
  ...wherever, beyond the scope of this document

__at this point__ you should be able to run Edge and the UX via the actual cloud server
