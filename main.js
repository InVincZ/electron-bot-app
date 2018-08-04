const {BrowserWindow} = require('electron').remote
const newWindowBtn = document.getElementById('frameless-window')

const path = require('path')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '/index.html')
  let win = new BrowserWindow({ frame: false })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})
