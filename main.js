const { app, BrowserWindow, Menu } = require('electron')

const template = [{
    label: 'Menu',
    submenu: [
        {
            label: 'Przejdź do repozytorium GitHub.com',
            click: async () => {
                const { shell } = require('electron')
                await shell.openExternal('https://github.com/MatBocz-PWSZ/ElectronJS-DesktopApp')
            }
        },

        {
            label: 'Przełącz pełny ekran',
            role: 'togglefullscreen'
        },

        {
            type: 'separator'
        },

        {
            label: 'Wyjdź z aplikacji',
            role: 'quit'
        },
    ]
}]
const menu = Menu.buildFromTemplate(template)


let win

function createWindow() {
    win = new BrowserWindow({
        width: 860,
        height: 460,
        webPreferences: {
            nodeIntegration: true
        }
    })

    Menu.setApplicationMenu(menu)

    win.loadFile('index.html')

    // Open the DevTools.
    //win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})