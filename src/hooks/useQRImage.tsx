import { useEffect, useState } from "react";

const BASE_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

interface useQRImageReturnType {
    imageUrl: string;
    isLoading: boolean;
}

function useQRImage(url: string): useQRImageReturnType {
    const [imageUrl, setImageUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (url !== '') {
            const controller = new AbortController()
            setIsLoading(true)
            fetch(`${BASE_URL}${url}`, { signal: controller.signal })
                .then(res => res.blob())
                .then(image => setImageUrl(URL.createObjectURL(image)))
                .finally(() => setIsLoading(false))
    
            return () => controller.abort()
        }
    }, [url])

    return { imageUrl, isLoading } 
}

export default useQRImage