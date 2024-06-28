const { contextBridge, ipcRenderer } = require('electron');
const os = require('os');

contextBridge.exposeInMainWorld('electron', {
    homeDir: os.homedir(),
    osVersion : os.version(),
    arch:  os.arch()
})

contextBridge.exposeInMainWorld('ipcRenderer', {
        send: (channel, data) => ipcRenderer.send(channel, data),
        on: (channel, callback_function ) => 
            ipcRenderer.on(channel, 
                (event, ...args)=> callback_function(...args)
            ),
        invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args)
    }
);