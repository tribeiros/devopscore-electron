
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
const shell = require('electron')
const express = require('./app/index');

let mainWindow
function createWindow () {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    show: false,
    width: width,
    height: height,
    transparent: true,
    titleBarStyle: 'hidden',
    fullscreen: true,
    backgroundColor: "#000",
    icon: __dirname + '/icon/mac/icon.icns'
  })

  mainWindow.loadURL('http://localhost:3000/');
  mainWindow.focus();

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('browser-window-created',function(e,window) {
      window.setMenu(null);
});


app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
