var electron = require('electron');
var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

electron.crashReporter.start();

var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});

