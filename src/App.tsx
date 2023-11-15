import { useState } from 'react'
import QRCode from './QRCode'
import Home from './Home'

// URL to get a QR image
const BASE_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

function App() {
  const [url, setUrl] = useState('')
  const [showQR, setShowQR] = useState(false)

  return (
    <>
     {showQR 
        ? <QRCode onGetQR={setShowQR} imageSrc={url} /> 
        : <Home onGetQR={setShowQR} onSetUrl={(url) => setUrl(`${BASE_URL}${url}`)} />
      }
    </>
  )
}

export default App
