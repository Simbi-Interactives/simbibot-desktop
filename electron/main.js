// https://github.com/electron/electron-quick-start/blob/master/main.js

const electron = require('electron');
 const {autoUpdater} = require('electron-updater'); // initilize automatic app updates
 autoUpdater.checkForUpdatesAndNotify();

// const server = require('../app');
// Module to cpontrol application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const server = require('../app');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 800});
//   mainWindow.setAutoHideMenuBar = true;
  mainWindow.setMenu(null);
  server.listen(3207, () => {
    const ionic_url = `http://localhost:${3207}`
    // and load the index.html of the app.
    const startUrl = ionic_url || url.format({
      pathname: path.join(__dirname, '/../www/index.html'),
      protocol: 'file:',
      slashes: true
    });
    mainWindow.loadURL(startUrl);

    // mainWindow.webContents.openDevTools();
  })
  
  // mainWindow.loadURL("http://localhost:8100");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
  

  })}

  app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});
