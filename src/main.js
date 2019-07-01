const electron = require('electron');

const { app, BrowserWindow, globalShortcut } = require('electron');

var packageMap = new Map();
var packageCount = 0;

function createWindow () {
  let win = new BrowserWindow({ width: 1920, height: 1080 });
  win.loadFile('src/index.html');
  win.on('closed', function(){
  	app.quit();
  });
};

function setup(){
	globalShortcut.register('F6', () => {
 		BrowserWindow.getFocusedWindow().toggleDevTools();
	});
	globalShortcut.register('F5', () => {
 		BrowserWindow.getFocusedWindow().reload();
	});
}

function running(pause){
	setInterval(function () { 
    	console.log('Refreshing');
    	var datapackage = ???;
    	dataQueue.push(datapackage);

	}, pause);
}
function runApp(){
	setup();
	createWindow(); 
}

app.on('ready', runApp);
