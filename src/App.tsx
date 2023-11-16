import { useState } from 'react'
import QRCode from './QRCode'
import Home from './Home'
import useQRImage from './hooks/useQRImage'

function App() {
  const [showQR, setShowQR] = useState(false)
  const [enteredUrl, setEnteredUrl] = useState('')
  const { imageUrl, isLoading } = useQRImage(enteredUrl)

  return (
    <>
     {showQR 
        ? <QRCode onGetQR={setShowQR} imageSrc={imageUrl} isLoading={isLoading} /> 
        : <Home onGetQR={setShowQR} onSetEnteredUrl={(url) => setEnteredUrl(url)} />
      }
    </>
  )
}

export default App
