//const {app, BrowserWindow} = require("electron");
const app = require("electron").app
const BrowserWindow = require("electron").BrowserWindow
const screen = require("electron").screen

const path = require("path");
const url = require("url")

function loadScreen() {
    const screenWidth = screen.getPrimaryDisplay().size.width;
    const screenHeight = screen.getPrimaryDisplay().size.height;
    mainWindow = new BrowserWindow({
        width: screenWidth,
        height: screenHeight,
        frame: false
    })
    //mainWindow.webContents.openDevTools();
    mainWindow.loadURL("file://"+__dirname+"/index.html");
}

app.on("ready",loadScreen);







