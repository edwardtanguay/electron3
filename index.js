const { app, BrowserWindow } = require('electron');


function createWindows() {
    let appWindow = new BrowserWindow({ width: 800, height: 600, frame: true });
    appWindow.removeMenu();
    //appWindow.loadURL('https://tanguay.info/run');
    appWindow.loadFile('./index.html');
}

app.on('ready', createWindows);