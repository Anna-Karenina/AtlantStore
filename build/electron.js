const {app,BrowserWindow,Menu,ipc } = require('electron')
const path = require('path');
const AppTray = require('./app/AppTray')
const isDev = require('electron-is-dev');

let tray;
let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900, 
    height: 680, 
    resizable: false,
    show:false,
    webPreferences : {webSecurity: false, nativeWindowOpen: true} });

  mainWindow.loadURL(isDev ?
   'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

    const template = [
     ...(process.platform === 'darwin' ? [{
     label: "Stip",
      submenu: [
       { role: 'about' },
       { type: 'separator' },
       { role: 'hide' },
       { role: 'hideothers' },
       { role: 'unhide' },
       { type: 'separator' },
       { role: 'quit' }
      ]
        }] : []),

        {
          label: 'Редактирование',
          submenu: [
            { role: 'forcereload' },
            { role: 'toggledevtools' },
          ]
        },
      ]
      const menu = Menu.buildFromTemplate(template);
      Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => mainWindow = null);
//новое протестить и если не так убрать
  mainWindow.on('minimize',  (event)=>{
    event.preventDefault()
    mainWindow.hide()
  })
  mainWindow.on('close',  (event) => {
    event.preventDefault();
    mainWindow.hide();
});
//---------------------------------------
}

app.on('ready', ()=>{
  createWindow();

  const IconName = process.platform === 'win32' ? 'icon.png' : 'vwicon.png'
  const IconPath = path.join(__dirname, `/icons/${IconName}`)
  tray = new AppTray(IconPath, mainWindow)
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
