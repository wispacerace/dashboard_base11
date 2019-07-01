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
/* data format:
	$WISR,ID,COUNT,UTC_TIME,LATITUDE,LONGITUDE,GPS_ALTITUDE,BAROMETER_ALTITUDE,
	NUM_SATELLITES,TEMP,BATTERY,EXTRA1,EXTRA2,EXTRA3,EXTRA4,EXTRA5*CHECKSUM
*/
function parseData(package){
	var dataArray = datapackage.split(",");
	var length = dataArray.length;
	var lastEntry = dataArray[length - 1];
	lastEntry = lastEntry.split("*");

	var packageID = dataArray[1];
	var count = dataArray[2];
	var checksum = lastEntry[1];
	dataArray[length - 1] = lastEntry[0];
	
	dataArray = dataArray.slice(3, );
	if(checkSum(checksum) === false){
		return -1;
	}
	return [count, dataArray];
}

function running(pause){
	// setInterval(function () { 
 //    	console.log('Refreshing');
 //    	var dataPackage = ???;
 //    	var result = parseData(dataPackage);
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
function runApp(){
	setup();
	createWindow();
	running(1000); // wait time in ms
}

app.on('ready', runApp);
