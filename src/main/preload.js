const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  onMenuClick: (callback) => ipcRenderer.on('menu-click', callback)
});
