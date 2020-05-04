const { app, BrowserWindow } = require('electron');

function createWindows() {
    let appWindow = new BrowserWindow();
    //appWindow.loadURL('https://tanguay.info/run');
    appWindow.loadFile('./index.html');
}

app.on('ready', createWindows);