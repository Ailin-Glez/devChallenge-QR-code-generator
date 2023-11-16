import { useState } from 'react'
import { Image, Button, HStack, VStack, Box, Spinner, useToast, Flex } from '@chakra-ui/react'
import { DownloadIcon, LinkIcon } from '@chakra-ui/icons'
import FileSaver from 'file-saver'
import qrLogo from './assets/logo-qr-generator.svg'

interface Props {
    imageSrc: string;
    isLoading: boolean;
    onGetQR: (show: boolean) => void;
}

const stylesButton = {
    bg: 'brand.blue',
    color: '#f2f5f9',
    borderRadius: '10px', 
    size: 'md',
    width: '13rem',
    py: '1.6rem',
    _hover: { bg: 'cyan.400', color: 'brand.dark', fontSize: '1.1rem' },
    transition: 'all ease 0.5s'
}

function QRCode({ imageSrc, isLoading, onGetQR }: Props) {
    const [isDownloading, setIsDownloading] = useState(false)
    const toast = useToast()

    const handleDownload = () => {
        setIsDownloading(true)
        setTimeout(() => setIsDownloading(false), 1000)
        FileSaver.saveAs(imageSrc, 'qr-code.jpg')
    }

    const handleShare = () => {
        navigator.clipboard.writeText(imageSrc)
        toast({ 
            title: 'QR link copied!', 
            description: 'You can paste & share the QR image link anywhere',  
            position: 'top-right',
            isClosable: true 
        })
    }

    return (
        <>
            <Image src={qrLogo} width='7rem' m='2rem 3rem' _hover={{ cursor: 'pointer' }} onClick={() => onGetQR(false)} />
            <VStack marginTop='6rem' spacing='4rem'>
                {isLoading 
                    ? <Flex minHeight='15.7rem' alignItems='center'> <Spinner size='xl' color='brand.blue' />  </Flex> 
                    : <VStack>
                        <Image position='absolute' zIndex='1' top='150px' p={5} src={imageSrc} />
                        <Box position='absolute' w='200px' h='200px' bg='white' top='150px' borderRadius='1rem' />
                        <Box w='250px' h='250px' bg='brand.darkBlue' borderRadius='50%' />
                    </VStack>
                }
                <HStack spacing={8} justifyContent='center'>
                    <Button {...stylesButton} onClick={handleDownload} disabled={isDownloading || isLoading}>
                        Download
                        {isDownloading ? <Spinner marginLeft={3} /> : <DownloadIcon marginLeft={3} /> }   
                    </Button>
                    <Button {...stylesButton} onClick={handleShare}>Share <LinkIcon marginLeft={3} /> </Button>
                </HStack>
            </VStack>
        </>
    );
}

export default QRCode;