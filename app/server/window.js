/*
  Lesson Learned:
  Actual NPM package for electron is "electron-prebuilt" which is a Dev Dependency
  When you run electron package from terminal it provides the electron package to the project
  `electron app/index.js`
  For some reason I have yet to figure out you cant just get the electron package nativly and run it
*/
'use strict';

import electron from 'electron';
// import { template } from '../config/menu';
// same as invoking require in es5.
const PORT = process.env.PORT || 8080;
// app is the container for electron to be able to run all the modules. IE: menu's, the window, .etc
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const crashReporter = electron.crashReporter;
// const Menu = electron.Menu;
// const shell = electron.shell;

crashReporter.start();
// Always have a reference to the window
let windowFrame;
// let menu = null;
// callback function for on 'ready' to create new frame.
function genWindow() {
  const localHost = 'http://127.0.0.1:';
  windowFrame = new BrowserWindow();
  windowFrame.on('closed', () => {
    windowFrame = null;
  });
  windowFrame.loadURL(localHost + PORT);
  windowFrame.toggleDevTools();
  // menu = Menu.buildFromTemplate(template);
  // windowFrame.setApplicationMenu(menu);
}

// App Configuration set basic GUI functionality

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (windowFrame === null) {
    genWindow();
  }
});

app.on('ready', genWindow);
