const {app, BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require('path');


function createMainWindow() {
    const mainWindow = new  BrowserWindow({
        title: 'Electron React App',
        width: 1000, 
        height: 800,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    // mainWindow.webContents.openDevTools();

    const startUrl = url.format({
        pathname: path.join(__dirname, 'electron-app/build/index.html'),
        protocol: 'file'
    });

    mainWindow.loadURL('http://localhost:3000');
}
// app.whenReady().then(createMainWindow);
app.on('ready', createMainWindow);

ipcMain.handle('add-numbers', async (event, num1, num2) => {
    const result = num1 + num2;
    return result;
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
});
