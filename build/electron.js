const electron = require('electron');
const {app,BrowserWindow,Menu,ipcMain } = require('electron')

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');




let mainWindow;
let consWindow;


function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900, height: 680,
    webPreferences : {webSecurity: false} });
    mainWindow.loadURL(isDev ?
      'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  consWindow = new BrowserWindow({
      width: 600, height: 480,
      show: false, modal: true, parent: mainWindow});  //!!доделать




  const template = [
    ...(process.platform === 'darwin' ? [{
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
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
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Поставщики',
      submenu: [
        {
          label: 'Редактирование' ,
          click(){
            consWindow.loadURL("http://localhost:3000/Consumer")
            consWindow.show() //!!доделать
          }
        },
      ]
    },
  ]

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => mainWindow = null);
  consWindow.on('blur',() => consWindow = consWindow.hide() ); //!!доделать
}
app.on('ready', createWindow);

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
