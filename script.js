const form = document.getElementById('qr-settings')
const results = document.getElementById('results')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const size = document.getElementById('qr-size').value
  const padding = document.getElementById('qr-padding').value
  const level = document.getElementById('qr-level').value
  const value = document.getElementById('qr-url').value

  const resultEl = document.createElement('canvas')
  const download = document.createElement('a')
  const resWrap = document.createElement('div')
  const canvasWrap = document.createElement('div')
  const infoWrap = document.createElement('div')

  resultEl.classList.add('result-canvas')
  resultEl.style.setProperty('--img-w', `${size}px`)
  canvasWrap.classList.add('result-img')
  infoWrap.classList.add('result-info')
  resWrap.classList.add('result-wrap')

  infoWrap.innerHTML = `
    <h2 class='form-title mb-1'>QR de ${value}</h2>
    <p class='result-p'>Nivel: ${level}</p>
    <p class='result-p'>Tamaño: ${size}px</p>
  `
  infoWrap.appendChild(download)
  canvasWrap.appendChild(resultEl)
  resWrap.appendChild(canvasWrap)
  resWrap.appendChild(infoWrap)
  results.appendChild(resWrap)

  const qr = new QRious({
    element: resultEl,
    size: size,
    padding: padding,
    level: level,
    value: value
  })

  download.setAttribute('download', 'qr.png')
  download.setAttribute('href', resultEl.toDataURL('image/png'))
  download.classList.add('button','mt-1', 'download-btn')
  download.innerText = 'Descargar'
})
