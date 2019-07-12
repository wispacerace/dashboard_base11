'use strict'

const electron = require('electron');
import { globalShortcut, app, protocol, BrowserWindow } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
var packageMap = new Map();
var packageCount = 0;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }]);

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 1920, height: 800, webPreferences: {
    nodeIntegration: true
  } });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment) {
    try {
      await installVueDevtools()
    } catch (e) {
    console.error('Vue Devtools failed to install:', e.toString())
    }
    runApp();
  }
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}


function setup(){
  globalShortcut.register('F6', () => {
    BrowserWindow.getFocusedWindow().toggleDevTools();
  });
  globalShortcut.register('F5', () => {
    BrowserWindow.getFocusedWindow().reload();
  });
  globalShortcut.register('ESC', () => {
    BrowserWindow.getFocusedWindow().close();
  });
  globalShortcut.register('Ctrl+C', () => {
    app.quit();
  });
}

function checkSum(data, checksum){
  return true;
}
/* data format:
  $WISR,ID,COUNT,UTC_TIME,LATITUDE,LONGITUDE,GPS_ALTITUDE,BAROMETER_ALTITUDE,
  NUM_SATELLITES,TEMP,BATTERY,EXTRA1,EXTRA2,EXTRA3,EXTRA4,EXTRA5*CHECKSUM
*/
function parseData(dataPackage){
  var dataArray = dataPackage.split(",");
  var length = dataArray.length;
  var lastEntry = dataArray[length - 1];
  lastEntry = lastEntry.split("*");

  var packageID = dataArray[1];
  var count = dataArray[2];
  var checksum = lastEntry[1];
  dataArray[length - 1] = lastEntry[0];
  if(checkSum(dataArray, checksum) === false){
    return -1;
  }
  
  dataArray = dataArray.slice(3, );
  return [count, dataArray];
}

function running(pause){
  // setInterval(function () { 
 //     console.log('Refreshing');
 //     var dataPackage = ???;
 //     var result = parseData(dataPackage);
   // }, pause);
  var testdata = "$WISR,ID,COUNT,UTC_TIME,LATITUDE,LONGITUDE,GPS_ALTITUDE,BAROMETER_ALTITUDE,\
NUM_SATELLITES,TEMP,BATTERY,EXTRA1,EXTRA2,EXTRA3,EXTRA4,EXTRA5*CHECKSUM";
  var result = parseData(testdata);
  if(result !== -1){
    var count = result[0];
    var dataArray = result[1];
    console.log(count + "   " + dataArray);
  }
}
// main function
function runApp(){
  setup();
  createWindow();
  running(1000); // wait time in ms
}
