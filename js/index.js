const {app,BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 500,
		height: 600,
		frame: false
	});

	mainWindow.on('closed' , () => {
	mainWindow = null;
	});
	let val = __dirname.toString();
	val = val.slice(0,val.length-2);
	console.log(val);
	mainWindow.loadURL('file://'+val+'./index.html');
});
