var app = require('app');
var BrowserWindow = require('browser-window');
var mainWindow = null;

// require('electron-debug')();

app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 300, height: 325, resizable: false});
  mainWindow.setMenu(null);
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
});
